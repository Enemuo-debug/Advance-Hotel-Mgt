const router = require('express').Router()
const { UserValidator } = require('../models/User.model')
const roomRoutes = require('./Room.routes')
const userRoutes = require('./User.routes')

router.use('/rooms', roomRoutes)
router.use('/user', userRoutes)

module.exports = router