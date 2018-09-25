import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css/Header.css'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='Header'>
        <img alt='Marvel' src='https://i.annihil.us/u/prod/misc/marvel.svg' className='logo' />
        <ul id='nav'>
          <li><Link to='/'>Accueil</Link></li>
          <li><Link to='/personnages'>Personages</Link></li>
          <li><Link to='/favoris'>favoris</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header
