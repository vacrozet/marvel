import React, { Component } from 'react'
import '../css/Characteres.css'
import '../css/Grid.css'
import Block from '../components/Block.js'
import Loader from '../components/Loader.js'
import { apiMarvel, apiHash } from '../utils/api'
import store from '../utils/store.js'
import { observer } from 'mobx-react'
// import Description from '../components/Description';

@observer
class Characters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: '',
      limit: 22,
      offset: 100,
      results: [],
    }
  }

  componentWillMount () {
    var hash = apiHash()
    apiMarvel().get(`/characters?limit=${this.state.limit}&offset=${this.state.offset}&${hash}`).then((res) => {
      if (res.data.status === 'Ok') {
        this.setState({
          count: res.data.data.count,
          limit: res.data.data.limit,
          offset: res.data.data.offset,
          results: res.data.data.results,
        }, () => store.results(true))
      }
    })
  }
  componentWillUnmount () {
    store.results(false)
  }

  render () {
    return (
      <div className='bodyGrid'>
        {store.displayResult ? this.state.results.map((result, index) => {
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

export default Characters
