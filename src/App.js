import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import Experience from './Components/Experience';
import {Leva} from 'leva';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Scene from './Components/Scene.js';
import HomeScreen from './Components/HomeScreen.js';
import TVSetup from './Components/TVSetup.js';

function App() {
  return (
    <>
      <Leva></Leva>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Scene/>}>
          </Route>
          <Route exact path = "/screen" element = {<HomeScreen/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
