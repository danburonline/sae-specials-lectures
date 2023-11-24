'use client'
import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

import Composition from '../spatial/composition'

export default function Play() {
  return (
    <Canvas shadows="variance" camera={{ position: [0, 0, 25], fov: 50 }} className="bg-gray-300">
      <Composition />
      <Perf position="top-right" />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
      </GizmoHelper>
    </Canvas>
  )
}
