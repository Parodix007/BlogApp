import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import './App.module.scss'

import MainView from './Views/MainView/MainView';
import ContactView from './Views/ContactView/ContactView';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={MainView} />
      <Route exact path='/contact' component={ContactView} />
    </Switch>
  </BrowserRouter>
)


export default App;
