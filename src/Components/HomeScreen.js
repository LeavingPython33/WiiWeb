import React, { useState } from 'react'
import './Styles/HomeScreenStyle.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import {animated, useSpring, config} from '@react-spring/web'
import music from '../Audio/Nintendo Wii Menu Music.mp3'
import { Link } from 'react-router-dom';
import tv from '../Images/TVStatic.JPG'

function BlurAnimation(delay){
  const spring = useSpring({
    from: {
        filter: 'blur(5px)',
    },
    to: {
        filter: 'blur(0px)',
    },
    config: config.molasses,
    delay: delay
  });
  return spring;
}



export default function HomeScreen() {
  const textAnimation = BlurAnimation(100)
  const [isClicked, setIsClicked] = useState(false)
  const [secondScreen, setSecondScreen] = useState(false)

  const slideAnimation = useSpring({width: isClicked ? "100vw" : "0vw" })
  const popAnimation = useSpring({scale: secondScreen ? "1" : "0", opacity: secondScreen ? "1" : "0", config: config.molasses})

  const state = {
 
    // Get audio file in a variable
    audio: new Audio(music),

    // Set initial state of song
    isPlaying: false,
  };

  state.audio.loop = true

  function DifferentScreen(){
    setSecondScreen(true)
  }

  
  if(!secondScreen){
    return (
      <div className='flex overflow-hidden'>
        <animated.div style={slideAnimation} className='flex h-screen flex-shrink-0 slideColor'>
        </animated.div>
        <div className='screenBackground flex items-center justify-center flex-col flex-shrink-1 gap-3 w-screen h-screen text-center'>
          <button onClick={() => (setIsClicked(true), setTimeout(DifferentScreen, 500), state.isPlaying = true)}>
            <animated.div style = {textAnimation} className="mb-2">
              <p className='text-4xl text-white'>
                The Wii
              </p>
              <p className='italic text-white text-opacity-50'>
                Projects / Games
              </p>
            </animated.div>
  
            <animated.div style = {textAnimation}>
              <p className='italic text-sm text-white text-opacity-40'>
                Click The Text
              </p>
            </animated.div>
          </button>
        </div>
      </div>
    )
  }
  
  return(
    <>

      <div className='flex flex-col min-h-screen min-w-screen slideColor'>
        <Link to={"/"} className='exitButton hover:text-red-600 text-xl m-6'>
          <i className="powerIcon bi bi-power"></i>
        </Link>
        <animated.div style={popAnimation} className='flex flex-initial flex-wrap flex-row pt-4 pl-32 gap-3 '>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
          <div className='displayBox border-4 rounded-xl'>
            <img src={tv} className='w-full h-full rounded-sm opacity-40'></img>
          </div>
        </animated.div>

        <animated.div style={popAnimation} className='flex flex-row gap-1 footer mt-2'>

        </animated.div>
      </div>
    </>

  )

}
