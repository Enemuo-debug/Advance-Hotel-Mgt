// Creating a user
// First we import the validator so we can ensure valid entries

const { User } = require('../models/User.model')

class UserCRUD {
    async fetchAllUsers(){
        return await User.find()
    }
    async createUser(data){
        return await User.create(data)
    }
    async changeUserData(id, data){
        return await User.findOneAndUpdate({_id: id}, data)
    }
    async deleteUser(id){
        return await User.findOneAndDelete({_id: id})
    }
    async findUserByName(id){
        // const { id } = req.params;
        return await User.findOne({_id: id})
    }
}

module.exports = new UserCRUD