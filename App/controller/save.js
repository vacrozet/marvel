const MongoClient = require('mongodb').MongoClient

module.exports = (req, res) => {
  MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err) { return console.dir(err) }
    var dbase = db.db('marvel')
    dbase.collection('Char').update({_id: '290693'}, {
      $push: {
        characters: req.body.id
      }
    }).then((res1) => {
      if (res1.result.ok === 1){
        res.json({
          success: true,
          message: 'id save'
        })
      }
    })
    db.close()
  })
  // console.log(req.query)
}
