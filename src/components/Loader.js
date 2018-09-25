import React, { Component } from 'react'
import '../css/Loader.css'
import store from '../utils/store.js'
import { observer } from 'mobx-react'

@observer
class Loader extends Component {
  render () {
    return (
      <div className='bodyLoader' >
        <div className='texte'>
          {!store.descritpion ? 'Loading ....' : null}
        </div>
      </div>
    )
  }
}

export default Loader
