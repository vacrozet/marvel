import { observable, action } from 'mobx'

class Store {
  @observable displayResult = false
  @observable displayLoader = true
  @observable displayDescription = false
  @observable descriptionComics = {}

  @action
  results (res) {
    this.displayResult = res 
  }
}
let store = new Store()
export default store
export { Store }