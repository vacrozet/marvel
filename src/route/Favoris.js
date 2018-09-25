import React, { Component } from 'react'
import { apiMarvel, local, apiHash } from '../utils/api'
import Block from '../components/Block.js'
import '../css/Characteres.css'
import '../css/Grid.css'
import store from '../utils/store.js'
import { observer } from 'mobx-react'
import Loader from '../components/Loader.js'

@observer
class Favoris extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idResult: '',
      resultat: []
    }
    this.findId = this.findId.bind(this)
  }

  findId () {
    var hash = apiHash()
    var tab = []
    for (let index = 0; index < this.state.idResult.length; index++) {
      apiMarvel().get(`/characters/${this.state.idResult[index]}?${hash}`).then((res) => {
        tab.push(res.data.data.results[0])
        this.setState({ resultat: tab })
      })
    }
    setTimeout(() => { store.results(true) }, 1000)
  }

  componentWillMount () {
    local().get('/get').then((res) => {
      if (res.data.success === true) {
        this.setState({ idResult: res.data.message })
        this.findId()
      }
    }).catch((err) => console.log(err))
  }
  componentWillUnmount () {
    store.results(false)
  }

  render () {
    return (
      <div className='bodyGrid'>
        {store.displayResult ? this.state.resultat.map((result, index) => {
          return (
            <Block
              key={index}
              id={result.id}
              path={result.thumbnail.path}
              extension={result.thumbnail.extension}
              title={result.name}
              description={result.description}
              comics={result.comics}
              props={this.props}
              />)
        }) : <Loader />}
      </div>
    )
  }
}

export default Favoris
