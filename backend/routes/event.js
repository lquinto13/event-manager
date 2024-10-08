const express = require('express')
const router = express.Router()
const { createEvent } = require('../controllers/event')

router.post('/createEvent', createEvent)

module.exports = router
