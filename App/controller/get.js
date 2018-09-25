const MongoClient = require('mongodb').MongoClient

module.exports = (req, res) => {
  MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err) { return console.dir(err) }
    var dbase = db.db('marvel')
    dbase.collection('Char').find({_id: '290693'}).toArray((err, result) => {
      if (err) console.log(err)
      return res.json({
        success: true,
        message: result[0].characters
      })
    })
  })
}
