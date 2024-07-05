import React, { useReducer, useRef, useState } from 'react'
import{Center, Gltf, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, useHelper} from '@react-three/drei'
import { DirectionalLight, DirectionalLightHelper } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva' 
import Tv from '../Models/Tv'

function Box(props) {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y = state.mouse.x * 2
    ref.current.rotation.x = -state.mouse.y
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 2) 
  })


  return (
    <mesh position={props.position} ref = {ref}>
      <boxGeometry args={props.size}></boxGeometry>
      <meshStandardMaterial color={props.color}></meshStandardMaterial>
    </mesh>
  )
}

function Sphere(props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef()

  const {shapeColor} = useControls({shapeColor: "black"})

  useFrame((state, delta) => {
    const speed = isHovered ? 2 : 1
    ref.current.rotation.x += delta * speed
  })

  return (
    <mesh
      ref={ref} 
      position={props.position} 
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={(event) => (event.stopPropagation(), setIsClicked(!isClicked))}
      scale={isClicked ? 1.25 : 1}
    >
      <sphereGeometry args={props.size}></sphereGeometry>
      <meshStandardMaterial color={isHovered ? "yellow" : shapeColor} wireframe></meshStandardMaterial>
    </mesh>
  )
}

function Torus(props) {
  return (
    <mesh position={props.position}>
      <torusGeometry args={props.size}></torusGeometry>
      <meshStandardMaterial color={props.color}></meshStandardMaterial>
    </mesh>
  )
}

function TorusKnot(props) {
  const ref = useRef()
  useFrame((state, delta) => {
    //ref.current.rotation.y = state.mouse.x * 2
    //ref.current.rotation.x = -state.mouse.y
    //ref.current.position.x = Math.sin(state.clock.elapsedTime * 2) 
  })

  return (
    <mesh position={props.position} ref={ref}>
      <torusKnotGeometry args={props.size}></torusKnotGeometry>
      <MeshDistortMaterial factor={2} color={props.color}></MeshDistortMaterial>
    </mesh>
  )
}

function Scene() {
  const directionalLightRef = useRef()
  const {lightColor, lightIntensity} = useControls({
    lightColor: "white", 
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5
    } 
  })

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

  return (
  <>
    <OrbitControls autoRotate={true} enableZoom={false} enablePan={false}></OrbitControls>

    <directionalLight position={[0, 2, 1]} intensity={lightIntensity} color={lightColor} ref={directionalLightRef}></directionalLight>
    <ambientLight intensity={2}></ambientLight>
    
    <mesh>
      <boxGeometry></boxGeometry>
      <meshStandardMaterial></meshStandardMaterial>
    </mesh>

    <Center>
      <Tv></Tv>
    </Center>


    <Sphere position ={[2, 1, 0]} size={[1, 16, 16]} color={"blue"}></Sphere>
    {/*<TorusKnot position={[-2, 1, 0]} color={"red"}></TorusKnot>*/}

    {/*<group position={[0, -2, 0]}>
      <Box position={[1, 1, 0]} size={[1, 1, 1]} color={"blue"}/>
      <Box position={[-1, 1, 0]} size={[1, 1, 1]} color={"red"}/>
    </group>*/}
  </>
  )
}

export default function Experience() {
  return (
    <>
      <Scene></Scene>
    </>
  )
}
