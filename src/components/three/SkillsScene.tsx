import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  Float,
  Html,
  OrbitControls,
  Stars,
} from "@react-three/drei";

import { useRef } from "react";

import type { Group } from "three";

import TechnologyNode from "./TechnologyNode";

interface Skill {
  name: string;
  icon: string;
  position: [number, number, number];
  color: string;
}

const technologies: Skill[] = [
  {
    name: "React",
    icon: "⚛",
    position: [-2.5, 1.5, 0],
    color: "#61dafb",
  },
  {
    name: "TypeScript",
    icon: "TS",
    position: [-3, -0.3, 0.5],
    color: "#3178c6",
  },
  {
    name: "Node.js",
    icon: "◆",
    position: [-1.8, -1.7, 0],
    color: "#68a063",
  },
  {
    name: "Python",
    icon: "🐍",
    position: [0.2, 2.1, 0],
    color: "#ffd43b",
  },
  {
    name: "NLP",
    icon: "AI",
    position: [2.2, 1.5, 0],
    color: "#b084ff",
  },
  {
    name: "LLM",
    icon: "✦",
    position: [3, 0.2, 0],
    color: "#c084fc",
  },
  {
    name: "RAG",
    icon: "R",
    position: [2.3, -1.5, 0.2],
    color: "#38bdf8",
  },
  {
    name: "PostgreSQL",
    icon: "◆",
    position: [0.2, -2.1, 0],
    color: "#5b9bd5",
  },
  {
    name: "Flutter",
    icon: "F",
    position: [-1.7, 0.1, 0.5],
    color: "#42a5f5",
  },
];

function Core() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.25;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef}>

      {/* Core sphere */}
      <mesh>
        <icosahedronGeometry args={[0.85, 2]} />

        <meshStandardMaterial
          color="#b982ff"
          emissive="#6d28d9"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner sphere */}
      <mesh scale={0.65}>
        <icosahedronGeometry args={[0.85, 2]} />

        <meshBasicMaterial
          color="#e9d5ff"
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>

      {/* Core label */}
      <Html center distanceFactor={7}>
        <div className="skill-core-label">
          <span>AI</span>
          <strong>AYAH.DEV</strong>
        </div>
      </Html>

      {/* Orbit 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.25, 0.008, 16, 100]} />

        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbit 2 */}
      <mesh rotation={[0.9, 0.3, 0.4]}>
        <torusGeometry args={[1.65, 0.006, 16, 100]} />

        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Orbit 3 */}
      <mesh rotation={[1.3, 0.8, 0.1]}>
        <torusGeometry args={[2.15, 0.004, 16, 100]} />

        <meshBasicMaterial
          color="#f4c18a"
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

function CameraMovement() {
  const { camera } = useThree();

  useFrame((state) => {
    const targetX = state.pointer.x * 0.35;
    const targetY = state.pointer.y * 0.2;

    camera.position.x +=
      (targetX - camera.position.x) * 0.02;

    camera.position.y +=
      (targetY - camera.position.y) * 0.02;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneContent() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  return (
    <>
      <ambientLight intensity={0.4} />

      <pointLight
        position={[0, 0, 3]}
        intensity={20}
        color="#a855f7"
      />

      <pointLight
        position={[-4, 2, 2]}
        intensity={10}
        color="#38bdf8"
      />

      <pointLight
        position={[4, -2, 2]}
        intensity={8}
        color="#f4c18a"
      />

      <Stars
        radius={8}
        depth={4}
        count={500}
        factor={1.5}
        saturation={0}
        fade
        speed={0.4}
      />

      <group ref={groupRef}>

        <Core />

        {technologies.map((technology) => (
          <Float
            key={technology.name}
            speed={1}
            rotationIntensity={0.15}
            floatIntensity={0.25}
          >
            <TechnologyNode {...technology} />
          </Float>
        ))}

      </group>

      <CameraMovement />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
}

export default function SkillsScene() {
  return (
    <div className="skills-canvas">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}