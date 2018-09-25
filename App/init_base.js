const MongoClient = require('mongodb').MongoClient
const uuid = require('uuid')

let id = 290693
let tab = {
  _id: id,
  characters: []
}

// Connect to the db
MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
  if (err) { return console.dir(err) }
  var dbase = db.db('marvel')
  dbase.createCollection('Char', () => {
    console.log(`Create Table Characters`)
  })
  dbase.collection('Char').insert(tab, null, (err, result) => {
    if (err) {
      console.dir(err)
      process.exit()
    } else {
      console.log('--> Insert <--')
    }
  })
  db.close()
})
