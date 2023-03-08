const Room = require('../models/Apartment.model')

class RoomFunctions {
    async createRoom(data){
        // const data = req.body
        return await Room.create(data)
    }
    async editRoom(id, data){
        // const { id } = req.params
        // const data = req.body
        return await Room.findByIdAndUpdate(id, data, { new: true })
    }
    async deleteRoom(id){
        // const { id } = req.params
        return await Room.findByIdAndDelete(id)
    }
    async findAllRooms(){
        return await Room.find()
    }
    async findRoomByID(id){
        // const { id } = req.params;
        return await Room.findById(id)
    }
    async findRoomByName(id){
        // const { id } = req.params;
        return await Room.findOne({_id: id})
    }
}
module.exports = new RoomFunctions()