import Butterfly from '@components/spatial/butterfly'
import Grid from '@components/spatial/grid'
import Plants from '@components/spatial/plants'
import { OrbitControls } from '@react-three/drei'
import { ToneMapping } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function Composition() {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.5}
        zoom0={30}
        maxDistance={50}
        minDistance={10}
        maxZoom={50}
        minZoom={10}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
      />

      <ToneMapping
        blendFunction={BlendFunction.NORMAL}
        adaptive={true}
        resolution={256}
        middleGrey={0.6}
        maxLuminance={20.0}
        averageLuminance={1.0}
        adaptationRate={1.0}
      />

      <fog attach="fog" args={['#D1D5DB', 30, 65]} />
      <color attach="background" args={['#D1D5DB']} />
      <ambientLight intensity={0.5} />

      <directionalLight position={[0, 20, 0]} intensity={1.5} />
      <spotLight position={[2, 10, 0]} intensity={1.5} castShadow={false} />
      <spotLight position={[-2, 10, 0]} intensity={1.5} castShadow={false} />

      <Grid />
      <Butterfly />
      <Plants />
    </>
  )
}
