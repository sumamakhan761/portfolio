import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { Float } from '@react-three/drei';
import { gsap } from 'gsap';
import { ThreeEvent } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
interface GeometryProps {
  r: number;
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  soundEffects: HTMLAudioElement[];
  materials: THREE.Material[];
}

const Geometry = ({
  r,
  position,
  geometry,
  soundEffects,
  materials,
}: GeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [visible, setVisible] = useState(false);

  const getRandomMaterial = () => gsap.utils.random(materials);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    const mesh = e.object as THREE.Mesh;

    // Play sound safely
    const sound = gsap.utils.random(soundEffects);
    sound && sound.play().catch(() => { });

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    // Ensure mesh.material is a valid material before changing it
    if (mesh.material) {
      mesh.material = getRandomMaterial();
    }
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    if (meshRef.current) {
      let ctx = gsap.context(() => {
        setVisible(true);

        // Check if meshRef.current and meshRef.current.scale are not null
        const scale = meshRef.current?.scale;
        if (scale) {
          gsap.from(scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: gsap.utils.random(0.8, 1.2),
            ease: "elastic.out(1,0.3)",
            delay: gsap.utils.random(0, 0.5),
          });
        }
      }, meshRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <group position={position}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          ref={meshRef}
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={getRandomMaterial()}
        />
      </Float>
    </group>
  );
};

const Shapes: React.FC = () => {
  // Example of using Geometry with dummy data
  // Replace with actual data or pass props from parent component
  return (
    <Canvas>
      <Geometry
        r={1}
        position={[0, 0, 0]}
        geometry={new THREE.BoxGeometry()}
        soundEffects={[new Audio()]}  // Replace with actual sound effects
        materials={[new THREE.MeshBasicMaterial({ color: 'red' })]}  // Replace with actual materials
      />
    </Canvas>
  );
};

export default Shapes;
