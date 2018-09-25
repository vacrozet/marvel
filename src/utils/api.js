import axios from 'axios'
import crypto from 'crypto'

export let local = () => {
  return axios.create({
    baseURL: 'http://localhost:3005'
  })
}
export let apiMarvel = () => {
  return axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public'
  })
}
export let apiHash = () => {
  const keyPublic = '5e63804272a50ac733c5e8e59545bdea'
  const keyPrivate = '7578070bbcad6c547a7ae79a76f00890b53ff2d3'
  var ts = new Date().getTime()
  return `apikey=${keyPublic}&ts=${ts}&hash=${crypto.createHash('md5').update(ts + keyPrivate + keyPublic).digest('hex')}`
}
