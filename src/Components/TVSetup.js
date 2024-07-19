import { Cloud, Clouds, Center, Environment, Fisheye, OrbitControls, Text3D, Text, Grid, PerspectiveCamera, Bounds, useBounds, Html } from '@react-three/drei'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import Tv from '../Models/Tv'
import Table from '../Models/Table'
import SmallTable from '../Models/SmallTable'
import CustomGrid from './CustomGrid'
import * as THREE from 'three'
import { useControls } from 'leva'

function ChangeCamera(props){
  const bounds = useBounds()
  {/*const {
    moveX,
    moveY,
    moveZ,
    targetX,
    targetY,
    targetZ,
    upX,
    upY,
    upZ,
    apply,} = useControls({
      moveX: 0,
      moveY: 0,
      moveZ: 0,
      targetX: 0,
      targetY: 0,
      targetZ: 0,
      upX: 0,
      upY: 0,
      upZ: 0,
      apply: false
    })
  */}
  
  useEffect(() => {
    bounds.refresh().clip().fit()
    
    if(props.isZoom){
      bounds.moveTo([1, 0.25, 0]).lookAt({ target: [0, 0.25, 0] })
    }
    //bounds.moveTo([moveX, moveY, moveZ]).lookAt({ target: [targetX, targetY, targetZ], up: [upX, upY, upZ] })
  })
}

export default function TVSetup() {
  const cloudRef = useRef()


  useFrame((state, delta) => {
    cloudRef.current.rotation.y += delta
    
    if(!isClicked){
      tvRef.current.rotation.y += delta / 2
    }
    else{
      tvRef.current.rotation.y = 0
    }
    //console.log(state)
  })

  const tvRef = useRef()

  const {camera} = useThree()
  camera.fov = 25
  //camera.x = 10
  //camera.y = 12
  //camera.z = 12

  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      <perspectiveCamera makeDefault></perspectiveCamera>
      {/*<OrbitControls makeDefault enableRotate={!isClicked} enableZoom={false} enablePan={false} zoom={5} minPolarAngle={-Math.PI / 2.5} maxPolarAngle={Math.PI / 2.25}></OrbitControls>*/}
      <ambientLight intensity={2}></ambientLight>
      
      <group ref={tvRef} position={[0, -0.5, 0]}>
        <Bounds position={[0, 0, 0]} clip fit={true} observe margin={isClicked ? 1 : 3}>
          <group onClick={(event) => (event.stopPropagation(), setIsClicked(true))} onPointerMissed={() => (setIsClicked(false))} position={[0, 0.05, 0]}>
            <Center position={[0, 0.65, 0]} rotation={[0, -1.58, 0]}>
              <Tv castShadow></Tv>
              <ChangeCamera isZoom={isClicked}></ChangeCamera>    
            </Center>
            {/*<Text color="black" anchorX="center" anchorY="middle">
              hello world!
            </Text>*/}
            {/*<Table scale={0.15}></Table>*/}
            <SmallTable castShadow position={[0, -0.05, 0]} scale={0.75}></SmallTable>
          </group>

          <Html occlude position={isClicked ? [0.195, 0.745, 0] : [0.19, 0.745, 0]} transform rotation={[0, Math.PI/2, 0]} scale={0.125} style={{backgroundColor: 'blue', width:'124px', height:"96px"}}>
            <iframe src="https://www.alfredtapia.com/" ></iframe>
          </Html>
        </Bounds>
        <CustomGrid></CustomGrid>
      </group>

      <Clouds ref={cloudRef} position={[0, 2, 0]}>
        <Cloud segments={20} bounds={[2, 1, 2]} volume={0.1} color="white" fade={100}/>
        <meshBasicMaterial></meshBasicMaterial>
      </Clouds>

      
      <Environment preset='dawn'></Environment>
    </>
  )
}
