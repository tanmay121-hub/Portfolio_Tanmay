import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';

const TechLogo = ({ position, color }) => {
  const meshRef = useRef();
  const baseY = useRef(position[1]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const time = state.clock.getElapsedTime();
    mesh.position.y = baseY.current + Math.sin(time * 1.1 + position[0]) * 0.35;
    mesh.rotation.y += 0.015;
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2.5}>
      <mesh position={position} ref={meshRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={3} />
      </mesh>
    </Float>
  );
};

const HolographicGlobe = () => {
  const globeRef = useRef();

  useFrame(() => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.rotation.y += 0.008;
    globe.rotation.x += 0.003;
  });

  return (
    <group ref={globeRef} scale={1.2}>
      {/* Outer Glow */}
      <Sphere args={[2.5, 64, 64]}>
        <MeshDistortMaterial
          color="#00f5ff"
          speed={3}
          distort={0.4}
          radius={1}
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
      
      {/* Core Globe */}
      <Sphere args={[2.1, 32, 32]}>
        <meshStandardMaterial 
          color="#bf00ff" 
          wireframe 
          transparent 
          opacity={0.5} 
          emissive="#bf00ff"
          emissiveIntensity={0.8}
        />
      </Sphere>

      {/* Internal Grid */}
      <Sphere args={[2.0, 16, 16]}>
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.3} />
      </Sphere>
    </group>
  );
};

const Scene3D = () => {
  return (
    <Canvas style={{ background: 'transparent' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={2.5} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#bf00ff" />
      
      <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1.5} />
      
      <HolographicGlobe />
      
      {/* Orbiting Tech Elements - Scaled and Positioned better */}
      <TechLogo position={[5, 3, -3]} color="#00f5ff" />
      <TechLogo position={[-5, -3, -2]} color="#bf00ff" />
      <TechLogo position={[4, -4, 3]} color="#ff0080" />
      <TechLogo position={[-6, 4, 2]} color="#00ff88" />

      <fog attach="fog" args={['#0a0a0f', 8, 20]} />
    </Canvas>
  );
};

export default Scene3D;
