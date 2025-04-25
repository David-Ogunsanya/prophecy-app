import React, { useState, useEffect, useRef } from 'react';
import './timeline.css'; // your existing CSS for .threewheel-container, .threewheel-scene, etc.

const ThreeTrackFerrisWheel = () => {
  const [currentYear, setCurrentYear] = useState(1565);
  const [zoom, setZoom] = useState(0.85);
  const wheelRef = useRef(null);

  // Timeline bounds
  const minYear = 1050;
  const maxYear = 1850;
  const yearRange = maxYear - minYear;
  
  // Full 360° rotation across this range
  const totalDegrees = 360;
  // Larger ring radius for more spacing
  const ringRadius = 35;

  // Sample events
  const allEvents = [
    {
      id: 1, year: 1066, endYear: 1087, title: "William I",
      track: "left", dynasty: "HOUSE OF NORMANDY", description: "First Norman King..."
    },
    {
      id: 2, year: 1189, endYear: 1199, title: "Richard I",
      track: "left", dynasty: "HOUSE OF PLANTAGENET", description: "Famous warrior king..."
    },
    {
      id: 3, year: 1215, endYear: 1216, title: "Magna Carta",
      track: "middle", dynasty: "HOUSE OF PLANTAGENET", description: "King John signed..."
    },
    {
      id: 4, year: 1348, endYear: 1350, title: "Black Death",
      track: "middle", dynasty: "HOUSE OF PLANTAGENET", description: "Devastating plague..."
    },
    {
      id: 5, year: 1422, endYear: 1461, title: "Henry VI",
      track: "left", dynasty: "HOUSE OF LANCASTER", description: "King of England..."
    },
    {
      id: 6, year: 1509, endYear: 1547, title: "Henry VIII",
      track: "right", dynasty: "HOUSE OF TUDOR", description: "Famous for six marriages..."
    },
    {
      id: 7, year: 1553, endYear: 1558, title: "Mary I",
      track: "middle", dynasty: "HOUSE OF TUDOR", description: "'Bloody Mary' by opponents..."
    },
    {
      id: 8, year: 1558, endYear: 1603, title: "Elizabeth I",
      track: "right", dynasty: "HOUSE OF TUDOR", description: "'Virgin Queen' & golden age..."
    },
    {
      id: 9, year: 1625, endYear: 1649, title: "Charles I",
      track: "right", dynasty: "HOUSE OF STUART", description: "Conflict with Parliament..."
    },
    {
      id: 10, year: 1154, endYear: 1189, title: "Henry II",
      track: "middle", dynasty: "HOUSE OF PLANTAGENET", description: "First Plantagenet king..."
    },
    {
      id: 11, year: 1760, endYear: 1820, title: "George III",
      track: "left", dynasty: "HOUSE OF HANOVER", description: "Longest-reigning king..."
    }
  ];

  // Dynasty colors
  const dynasties = {
    'HOUSE OF LANCASTER':   'rgb(60, 95, 190)',
    'HOUSE OF YORK':        'rgb(220, 220, 220)',
    'HOUSE OF TUDOR':       'rgb(200, 0, 0)',
    'HOUSE OF PLANTAGENET': 'rgb(30, 130, 76)',
    'HOUSE OF WINDSOR':     'rgb(200, 30, 30)',
    'HOUSE OF STUART':      'rgb(100, 0, 150)',
    'HOUSE OF HANOVER':     'rgb(30, 144, 255)',
    'HOUSE OF NORMANDY':    'rgb(210, 180, 140)'
  };

  // Listen for scroll to update currentYear
  const handleScroll = (e) => {
    if (wheelRef.current) {
      e.preventDefault();
      const scrollSpeed = Math.max(1, Math.round(Math.abs(e.deltaY) / 20));
      if (e.deltaY > 0) {
        setCurrentYear(prev => Math.min(prev + scrollSpeed, maxYear));
      } else {
        setCurrentYear(prev => Math.max(prev - scrollSpeed, minYear));
      }
    }
  };

  useEffect(() => {
    const wheelEl = wheelRef.current;
    if (wheelEl) {
      wheelEl.addEventListener('wheel', handleScroll, { passive: false });
      return () => wheelEl.removeEventListener('wheel', handleScroll);
    }
  }, []);

  // Map a year to an angle around the X-axis
  const getAngleForYear = (year) => {
    const ratio = (year - minYear) / yearRange;
    return ratio * totalDegrees;
  };

  // The entire ring is rotated so currentYear is at the front
  const ringRotation = getAngleForYear(currentYear);

  // Determine focus event
  const focusEventId = (() => {
    let minDist = Infinity, candidate = null;
    allEvents.forEach(ev => {
      const dist = Math.abs(ev.year - currentYear);
      if (dist < minDist) {
        minDist = dist;
        candidate = ev.id;
      }
    });
    return candidate;
  })();

  // More spacing: bigger offsets
  const getEventStyle = (ev) => {
    const eventAngle = getAngleForYear(ev.year);
    let xOffset = 0;
    if (ev.track === "left")   xOffset = -30; // shift left 30rem
    if (ev.track === "right")  xOffset =  30; // shift right 30rem

    // We'll fade over a bigger range
    const maxDist = 300;
    const dist = Math.abs(ev.year - currentYear);
    let opacity = 0.3;
    let scale = 0.7;
    if (dist < maxDist) {
      const ratio = 1 - dist / maxDist;
      opacity += ratio * 0.7;  // 0.3 -> 1.0
      scale += ratio * 0.8;    // 0.7 -> 1.5
    }
    // Focused event
    if (ev.id === focusEventId) {
      opacity = 1;
      scale = 1.8;
    }

    return {
      transform: `
        translateX(${xOffset}rem)
        rotateX(${eventAngle}deg)
        translateZ(${ringRadius}rem)
        scale(${scale})
      `,
      opacity,
      zIndex: ev.id === focusEventId ? 999 : 1,
      borderColor: ev.id === focusEventId ? '#f44' : '#444'
    };
  };

  return (
    <div className="threewheel-container" ref={wheelRef}>
      {/* Stats Panel (top-left) */}
      <div className="stats-panel">
        <h2 className="highlight">Monarch Stats</h2>
        <p className="info-text">
          A running total of kings and queens of England & Great Britain.
        </p>
        <div className="stats-group">
          <div className="stat-row">
            <span>Monarchs</span>
            <span className="highlight-number">42</span>
          </div>
          <div className="stat-row">
            <span>Kings</span>
            <span className="highlight-number">36</span>
          </div>
          <div className="stat-row">
            <span>Queens</span>
            <span className="highlight-number">6</span>
          </div>
        </div>
        <div className="year-display">Year: {currentYear}</div>
      </div>

      {/* 3D scene */}
      <div className="threewheel-scene">
        <div
          className="threewheel-stage"
          style={{
            transform: `rotateX(${-ringRotation}deg) scale(${zoom})`
          }}
        >
          {allEvents.map((ev) => {
            const style = getEventStyle(ev);
            const color = dynasties[ev.dynasty] || 'rgb(200, 200, 200)';
            return (
              <div key={ev.id} className="threewheel-event" style={style}>
                <div className="event-dynasty" style={{ backgroundColor: color }}>
                  {ev.dynasty.replace('HOUSE OF ', '')}
                </div>
                <h3>{ev.title}</h3>
                <p className="event-range">
                  {ev.year} - {ev.endYear}
                </p>
                <p className="event-description">{ev.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls (bottom-left) */}
      <div className="controls">
        <button onClick={() => setCurrentYear(y => Math.max(y - 20, minYear))}>
          &#9664; 20 yrs
        </button>
        <button onClick={() => setCurrentYear(y => Math.min(y + 20, maxYear))}>
          20 yrs &#9654;
        </button>
        <button onClick={() => setZoom(z => Math.min(z + 0.1, 2))}>Zoom In</button>
        <button onClick={() => setZoom(z => Math.max(z - 0.1, 0.5))}>Zoom Out</button>
      </div>

      {/* Dynasty Legend (bottom-center) */}
      <div className="dynasty-legend">
        {Object.entries(dynasties).map(([house, color]) => (
          <div key={house} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: color }}></span>
            <span className="legend-label">{house.replace('HOUSE OF ', '')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeTrackFerrisWheel;
