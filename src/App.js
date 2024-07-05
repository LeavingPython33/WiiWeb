import logo from './logo.svg';
import './App.css';
import {Canvas} from '@react-three/fiber'
import React, { Suspense } from 'react';
import Experience from './Components/Experience';
import {Leva} from 'leva';
import Tv from './Models/Tv.jsx'
import TVSetup from './Components/TVSetup.js';

function App() {
  return (
    <>
      <Leva></Leva>
      <Canvas flat >
        <Suspense Suspense={null}>
          <TVSetup></TVSetup>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
