const CRUD = require('../Services/User.service')

class UserControl {
    async CreateUser(req, res){
        const data = req.body
        const existingUser = await CRUD.fetchAllUsers()
        const userNames = []
        for (let i = 0; i < existingUser.length; i++){
            userNames.push(existingUser[i].name)
        }
        if ( userNames.includes(data.name) ){
            res.json({
                message: 'THE USER CREATION PROCESS WAS UNSUCCESSFUL',
                success: false
            }).status(500)
        }
        else {
            await CRUD.createRoom(data)
            res.json({
                message: 'This process was  SUCCESSFUL',
                success: true,
                data: 'New USER Created'
            }).status(200)
        }
    }
    async UpdateUser(req, res){
        const { id } = req.params
        const data = req.body
        const existingUser = await CRUD.fetchAllUsers()
        const IDlist = []
        for (let i = 0; i < existingUser.length; i++){
            IDlist.push(existingUser[i]._id)
        }
        if (IDlist.includes(id)){
            await CRUD.editRoom(id, data)
            res.json({
                message: 'DATA UPDATED SUCCESSFULLY',
                success: true
            }).status(200)
        }
        else{
            res.json({
                message: 'THE ID PROVIDED IS NOT IN THE DATA BASE',
                success: false
            }).status(500)
            }
    }
    async DeleteUser (req, res){
        const { id } = req.params
        const existingUser = await CRUD.fetchAllUsers()
        const IDlist = []
        for (let i = 0; i < existingUser.length; i++){
            IDlist.push(existingUser[i]._id)
        }
        if (IDlist.includes(id)){
            await CRUD.deleteRoom(id)
            res.json({
                message: 'DATA DELETED SUCCESSFULLY',
                success: true
            }).status(200)
        }
        else {
            res.json({
                message: 'THE ID ENTERED IS NOT IN THE DATABASE',
                success: false
            }).status(500)
        }
    }
}
module.exports = new UserControl