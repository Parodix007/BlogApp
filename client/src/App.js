import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import './App.module.scss'
import MainView from './Views/MainView/MainView';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={MainView} />
    </Switch>
  </BrowserRouter>
)


export default App;
