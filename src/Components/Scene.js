import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import TVSetup from './TVSetup'

export default function Scene() {
  return (
    <Canvas flat >
        <Suspense Suspense={null}>
            <TVSetup></TVSetup>
        </Suspense>
    </Canvas>
  )
}
