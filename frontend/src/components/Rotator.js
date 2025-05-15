import React, { useState, useEffect } from 'react';

const Rotator = ({ items, className, style, itemHeight = '4.5rem', index }) => {
  const [internalIndex, setInternalIndex] = useState(0);

  // Use the passed index if provided, otherwise use internal state
  const displayIndex = typeof index === 'number'
    ? index % items.length
    : internalIndex;

  useEffect(() => {
    if (typeof index === 'number') return; // Don't run timer if index is controlled
    const interval = setInterval(() => {
      setInternalIndex(prev => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length, index]);

  // Try to convert itemHeight to px for transform math
  let itemHeightPx = itemHeight;
  let transformValue = '';
  if (typeof itemHeight === 'string' && itemHeight.endsWith('rem')) {
    const rem = parseFloat(itemHeight);
    itemHeightPx = rem * 16;
    transformValue = `translateY(-${displayIndex * itemHeightPx}px)`;
  } else if (typeof itemHeight === 'string' && itemHeight.endsWith('px')) {
    itemHeightPx = parseFloat(itemHeight);
    transformValue = `translateY(-${displayIndex * itemHeightPx}px)`;
  } else if (typeof itemHeight === 'number') {
    itemHeightPx = itemHeight;
    transformValue = `translateY(-${displayIndex * itemHeightPx}px)`;
  } else {
    // fallback: use the string directly in the transform
    transformValue = `translateY(-${displayIndex} * ${itemHeight})`;
  }

  return (
    <span className={className}>
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{ ...style, transform: transformValue }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{ height: typeof itemHeightPx === 'number' ? itemHeightPx + 'px' : itemHeight }}
            className="flex items-center justify-center text-blue-600 font-serif text-2xl md:text-6xl"
          >
            {item}
          </div>
        ))}
      </div>
    </span>
  );
};

export default Rotator; 