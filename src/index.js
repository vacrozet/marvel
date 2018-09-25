import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Accueil from './route/Accueil.js'
import Header from './components/Header.js'
import Characters from './route/Characters.js'
import Description from './components/Description'
import Favoris from './route/Favoris.js'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='data'>
        <Header />
        <Switch>
          <Route exact path='/personnages' component={Characters} />
          <Route exact path='/personnages/:id' component={Description} />
          <Route exact path='/favoris' component={Favoris} />
          <Route path='/' component={Accueil} />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Index} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
