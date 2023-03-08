const {Schema, model} = require('mongoose')

const RoomSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    class: {
        type: String,
        enum: [`Standard Suite`, `Deluxe Suite`],
        required: true
    }
})
const Room = model('Rooms', RoomSchema)
module.exports = Room