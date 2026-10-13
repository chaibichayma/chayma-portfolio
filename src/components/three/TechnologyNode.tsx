import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import type { Group } from "three";

interface TechnologyNodeProps {
  name: string;
  icon: string;
  position: [number, number, number];
  color: string;
}

export default function TechnologyNode({
  name,
  icon,
  position,
  color,
}: TechnologyNodeProps) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <group
      ref={groupRef}
      position={position}
      scale={hovered ? 1.25 : 1}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[0.18, 32, 32]} />

        <meshStandardMaterial
          color={hovered ? "#ffffff" : color}
          emissive={color}
          emissiveIntensity={hovered ? 3 : 1.5}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* Glow sphere */}
      <mesh scale={hovered ? 2.2 : 1.7}>
        <sphereGeometry args={[0.18, 20, 20]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Label */}
      <Html
        center
        distanceFactor={8}
        position={[0, -0.42, 0]}
        style={{
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            padding: "6px 10px",
            borderRadius: "8px",
            background: "rgba(8, 11, 16, 0.85)",
            border: `1px solid ${color}55`,
            color: "white",
            fontSize: "10px",
            fontFamily: "DM Sans, sans-serif",
            backdropFilter: "blur(10px)",
            boxShadow: `0 0 20px ${color}22`,
          }}
        >
          <span style={{ marginRight: "5px" }}>
            {icon}
          </span>

          {name}
        </div>
      </Html>
    </group>
  );
}