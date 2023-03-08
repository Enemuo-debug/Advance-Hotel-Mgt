const router = require('express').Router()
const {
    CreateRoom,
    findARoom,
    UpdateRoom,
    DeleteRoom,
    findAllRooms,
} = require('../controllers/Room.controller')


router.post('/', CreateRoom())
router.get('/:id', findARoom())
router.patch('/:id', UpdateRoom())
router.delete('/:id', DeleteRoom())
router.get('/', findAllRooms())

module.exports = router()