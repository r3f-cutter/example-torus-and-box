import { Box, TorusKnot } from "@react-three/drei";

export default function Scene({ matProps }) {
  const torusArgs = [1, 0.2, 220, 60];
  const boxArgs = [2, 1, 1];
  return (
    <group>
      <group>
        <Box args={boxArgs}>
          <meshLambertMaterial
            color={"green"}
            metalness={0.1}
            roughness={0.75}
            {...matProps}
          />
        </Box>
        <TorusKnot args={torusArgs} renderOrder={6}>
          <meshLambertMaterial
            color={0xffc107}
            metalness={0.1}
            roughness={0.75}
            clipShadows={true}
            {...matProps}
          />
        </TorusKnot>
      </group>
    </group>
  );
}
