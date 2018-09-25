import React, { Component } from 'react'
import '../css/Description.css'
// import store from '../utils/store.js'
import { observer } from 'mobx-react'
import { apiMarvel, apiHash, local } from '../utils/api'


@observer
class Description extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      paths: '',
      extension: '',
      comics: '',
      favori: false,
      sizeMax: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleGet = this.handleGet.bind(this)
  }

  handleRemove () {
    local().delete(`/remove/${this.props.match.params.id}`).then((res) => {
      this.handleGet()
    }).catch((err) => console.log(err))
  }
  handleAdd () {
    if (this.state.sizeMax !== true) {
      local().post('/save', {
        id: this.props.match.params.id
      }).then((res) => {
        this.handleGet()
      }).catch((err) => console.log(err))
    } 
  }

  handleGet () {
    local().get('/get').then((res1) => {
      if (res1.data.message.length > 0) {
        let verif = false
        res1.data.message.forEach(element => {
          if (element === this.props.match.params.id) verif = true
        });
        if (verif === true) {
          this.setState({ favori: true })
        } else {
          this.setState({ favori: false })
        }
      }
      if (res1.data.message.length === 0) {
        this.setState({ favori: false })
      }
      if (res1.data.message.length === 5) {
        this.setState({ sizeMax: true })
      } else {
        this.setState({ sizeMax: false })
      }
    }).catch((err) => console.log(err))
  }
  
  componentWillMount () {
    var hash = apiHash()
    apiMarvel().get(`/characters/${this.props.match.params.id}?${hash}`).then((res) => {
      if (res.data.status === 'Ok') {
        res.data.data.results[0].comics.items.splice(3)
        this.setState({
          title: res.data.data.results[0].name,
          description: res.data.data.results[0].description,
          paths: res.data.data.results[0].thumbnail.path,
          extension: res.data.data.results[0].thumbnail.extension,
          nbComics: res.data.data.results[0].comics.available,
          tabComics: res.data.data.results[0].comics.items
        })
      }
    })
    this.handleGet()
  }
  
  render () {
    return (
      <div className='bodyDescription'>
        <div className='image' style={{backgroundImage: 'url(' + this.state.paths + '.' + this.state.extension + ')'}} />
        <div className='name'>{this.state.title}</div>
        <div className='description'> Description: {this.state.description ? this.state.description : 'Aucune Descrption pour ce personnage'}</div>
        <div className='nbComics'>Nombre de Commics: {this.state.nbComics ? this.state.nbComics : ' 0 '}</div>
        <div className='listeComics'>Liste Comics :</div>
        <div>{this.state.tabComics ? this.state.tabComics.map((result, index) => {
          return(<div className='listeComics' key={index}> - {result.name}</div>)
        }) : null}
      </div>
        {this.state.favori ? (
          <div className='remove' onClick={() => this.handleRemove()}>Enlever des favoris</div>
        ) : (
          <div className='add'onClick={() => this.handleAdd()}>Ajouter aux favoris</div>
        )}
      </div>
    )
  }
}

export default Description
