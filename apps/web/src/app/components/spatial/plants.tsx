// @ts-nocheck
import { a as animated, useSpring } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_7014: THREE.Mesh
    Object_7016: THREE.Mesh
    Object_7020: THREE.Mesh
    Object_7046: THREE.Mesh
    Object_1: THREE.Mesh
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4_1: THREE.Mesh
    Object_3519: THREE.Mesh
    Object_3520: THREE.Mesh
    Object_3522: THREE.Mesh
    Object_3523: THREE.Mesh
  }
  materials: {
    Ground: THREE.MeshStandardMaterial
    Stem: THREE.MeshStandardMaterial
    Leaves: THREE.MeshStandardMaterial
    Leaves_Yellow: THREE.MeshStandardMaterial
    Rock: THREE.MeshStandardMaterial
    Grass_A: THREE.MeshStandardMaterial
    Grass_B: THREE.MeshStandardMaterial
  }
}

export default function Plants(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/plants-transformed.glb') as GLTFResult
  // Define your spring animation
  const { scale, rotation } = useSpring({
    from: {
      scale: 0,
      rotation: [0, Math.PI, 0]
    },
    to: {
      scale: 1.5,
      rotation: [0, 0, 0] // 90 degrees around the Y axis
    },
    config: { mass: 8, tension: 175, friction: 100, precision: 0.00001 },
    delay: 1000
  })

  return (
    <animated.group
      {...props}
      dispose={null}
      scale={scale}
      position={[0, -6, 0]}
      rotation={rotation}
    >
      <mesh
        scale={1.025}
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Object_4.geometry}
        material={materials.Ground}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7014.geometry}
        material={materials.Stem}
        position={[-2.99, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_7016.geometry}
        material={materials.Leaves}
        position={[-2.99, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_7020.geometry}
        material={materials.Leaves_Yellow}
        renderOrder={100}
      />
      <mesh
        geometry={nodes.Object_7046.geometry}
        material={materials.Rock}
        position={[-0.546, 0.084, -0.61]}
        rotation={[-0.031, -0.535, -0.012]}
        scale={0.538}
      />
      <instancedMesh
        args={[nodes.Object_1.geometry, materials.Grass_A, 876]}
        instanceMatrix={nodes.Object_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_2.geometry, materials.Grass_B, 876]}
        instanceMatrix={nodes.Object_2.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_3.geometry, materials.Grass_A, 876]}
        instanceMatrix={nodes.Object_3.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_4_1.geometry, materials.Grass_B, 876]}
        instanceMatrix={nodes.Object_4_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_3519.geometry, materials.Rock, 5]}
        instanceMatrix={nodes.Object_3519.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_3520.geometry, materials.Rock, 6]}
        instanceMatrix={nodes.Object_3520.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_3522.geometry, materials.Rock, 8]}
        instanceMatrix={nodes.Object_3522.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Object_3523.geometry, materials.Rock, 5]}
        instanceMatrix={nodes.Object_3523.instanceMatrix}
      />
    </animated.group>
  )
}

useGLTF.preload('/models/plants-transformed.glb')
