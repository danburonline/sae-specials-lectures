import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Bone, Group, MeshStandardMaterial, SkinnedMesh } from 'three'
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
  animations: any[]
}

const Butterfly = () => {
  const butterflyRef = useRef<Group>(null!)
  const { nodes, materials, animations } = useGLTF('/models/scene-transformed.glb') as GLTFResult
  const { actions } = useAnimations(animations, butterflyRef)

  useEffect(() => {
    for (const action of Object.values(actions)) {
      if (action !== null) {
        action.timeScale = 1.1
        action.play()
      }
    }
  }, [actions])

  return (
    <group
      name="AnimatedButterfly"
      rotation={[0, -Math.PI / 2, 0]}
      scale={50}
      ref={butterflyRef}
      position={[0, 2, 0]}
    >
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
