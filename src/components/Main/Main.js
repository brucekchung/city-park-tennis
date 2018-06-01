import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Players from '../Players/Players'

const Main = () => (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/Players' component={ Players }/>
  </Switch>
)

export default Main
