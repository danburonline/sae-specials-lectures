import { useGLTF } from '@react-three/drei'
import { Bone, MeshStandardMaterial, SkinnedMesh } from 'three'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_119: SkinnedMesh
    Object_121: SkinnedMesh
    _rootJoint: Bone
  }
  materials: {
    wings: MeshStandardMaterial
    body: MeshStandardMaterial
  }
}

const Butterfly = () => {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb') as GLTFResult
  return (
    <group name="AnimatedButterfly" rotation={[0, -Math.PI / 2, 0]} scale={40}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        receiveShadow={false}
        name="Object_119"
        geometry={nodes.Object_119.geometry}
        material={materials.wings}
        skeleton={nodes.Object_119.skeleton}
        castShadow={false}
      />
      <skinnedMesh
        receiveShadow={false}
        name="Object_121"
        geometry={nodes.Object_121.geometry}
        material={materials.body}
        skeleton={nodes.Object_121.skeleton}
        castShadow={true}
      />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')

Butterfly.displayName = 'Butterfly'
export default Butterfly
