const router = require('express').Router()
const {
    CreateUser,
    UpdateUser,
    DeleteUser,
} = require('../controllers/User.controller')


router.post('/', CreateUser())
router.patch('/:id', UpdateUser())
router.delete('/:id', DeleteUser())

module.exports = router