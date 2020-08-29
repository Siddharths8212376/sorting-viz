import React, { useState } from 'react'
import Visualizer from './components/visualizer'
import './App.css'
import axios from 'axios'

const App = () => {
  const promise = axios.get('http://localhost:3001/')
  return (
    <div>
    <Visualizer />
    </div>
  );
}

export default App
