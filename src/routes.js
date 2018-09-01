import React from 'react'
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)
