import { OrbitControls, Stats } from "@react-three/drei";
import React, { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Cutter from "@r3f-cutter/r3f-cutter";
import { useControls } from "leva";

import Scene from "./Scene";

export default function App() {
  const { cutPlanePosition } = useControls({
    cutPlanePosition: {
      value: 0,
      min: -2,
      max: 2,
      step: 0.01,
      onChange: (v) => {
        xPlane.constant = v;
      }
    }
  });
  const [xPlane] = useState(
    new THREE.Plane(new THREE.Vector3(1, 0, 0), cutPlanePosition)
  );
  return (
    <Canvas
      camera={{ fov: 45, near: 0.1, far: 1000, position: [-2.5, 2.5, 2.5] }}
      onCreated={(state) => {
        state.gl.localClippingEnabled = true;
      }}
    >
      <Cutter plane={xPlane}>
        <Scene />
      </Cutter>
      <planeHelper args={[xPlane, 4, 0x999999]} />
      <Scene matProps={{ wireframe: true, transparent: true, opacity: 0.1 }} />
      <ambientLight />
      <pointLight color="white" position={[10, 20, 1]} />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
}
