import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import './App.module.scss'

const App = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
)


export default App;
