import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from '../containers/Home'

export default function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
      </div>
    </Router>
   
  )
}
