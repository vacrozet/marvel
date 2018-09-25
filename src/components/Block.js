import React, { Component } from 'react'
import '../css/Grid.css'
import { observer } from 'mobx-react'

@observer
class Block extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.displayDescriptions = this.displayDescriptions.bind(this)
  }

  displayDescriptions () {

    this.props.props.history.push(`/personnages/${this.props.id}`)
  }

  render () {
    return (
      <div className='bodyCard'
        style={{backgroundImage: 'url(' + this.props.path + '.' + this.props.extension + ')'}}
        onClick={() => this.displayDescriptions()}
        >
        <div className='opacity'>
          <div className='descriptif'>
            <div className='title'>
              {this.props.title} <br />
              <div className='click'>Click for view more</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Block
