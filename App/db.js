const MongoClient = require('mongodb').MongoClient
var db
var error

const url = 'mongodb://localhost/marvel/'

module.exports = {
  connect: () => {
    MongoClient.connect(url, (err, _db) => {
      if (err) {
        error = err
      }
      console.log("Connecté à la base de données 'marvel'")
      db = _db
    })
  },
  get: () => {
    return new Promise((resolve, reject) => {
      if (error === undefined) return resolve(db)
      else return reject(error)
    })
  },
  close: () => {
    db.close()
  }
}
