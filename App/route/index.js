const express = require('express')
const router = express.Router()

router.get('/get', require('../controller/get.js'))
router.post('/save', require('../controller/save.js'))
router.delete('/remove/:id', require('../controller/remove.js'))

module.exports = router
