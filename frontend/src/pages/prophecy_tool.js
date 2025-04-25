import React from 'react';
import { Canvas } from '@react-three/fiber';

export default function TimelinePage() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

