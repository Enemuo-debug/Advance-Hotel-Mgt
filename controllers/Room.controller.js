const RoomService = require('../Services/room.service')


class RoomController {

    async CreateRoom(req, res){
        const data = req.body
        const existingRoom = await RoomService.findRoomByName(data.name)
        if(existingRoom){
            res.status(500).json({

                message: 'ROOM CREATION WAS UNSUCCESSFUL',
                success: false

            })
        }
        const newRoom = await RoomService.createRoom(data)

        res.status(200).json({

            message: "ROOM CREATED SUCCESFULLY",
            success: true,
            data: newRoom

        })
    }

    async findARoom(req, res){
        const { id } = req.params
        const existingRoom = await RoomService.findRoomByID(id)
        if ( existingRoom ){
            data = await RoomService.findRoomByID(id)
            res.status(200).json({

                message: "DATA FETCHED SUCCESSFULLY",
                success: true,
                data: data

            })
        }
        res.status(500).json({

            message: 'ROOM FETCH WAS UNSUCCESSFUL',
            success: false

        })
    }
    async findAllRooms (req, res){
        const AllRooms = await RoomService.findAllRooms()
        res.json({
            message: 'DATA WAS FETCHED SUCCESSFULLY',
            success: true,
            data: AllRooms
        }).status(200)
    }
    async UpdateRoom(req, res){
        const { id } = req.params
        const data = req.body
        const existingRoom = await RoomService.findRoomByID(id)
        if (existingRoom){
            const data1 = await RoomService.editRoom(id, data)
            res.status(200).json({

                message: "ROOM UPDATED SUCCESSFULLY",
                success: true,
                data: data1

            })
        }
        res.status(500).json({

            message: 'ROOM UPDATE WAS UNSUCCESSFUL',
            success: false

        })
    }
    async DeleteRoom (req, res){
        const { id } = req.params
        const existingRoom = await RoomService.findRoomByID(id)
        if ( existingRoom ) {
            const data = await RoomService.deleteRoom(id)


            res.status(200).json({

                message: 'ROOM DELETED SUCCESSFULLY',
                success: true,
                data: data

            })
        }
        res.status(500).json({

            message: 'ROOM DELETE OPERATION WAS UNSUCCESSFUL',
            success: false

        })
    }
}
module.exports = new RoomController()