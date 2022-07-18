const UserService = class {
    constructor(UserModel) {
        this.Model = UserModel
    }

    async create(userData){
        const newUser = new this.Model(userData)
        newUser.save()
        // delete newUser.paswsword
        return newUser.toObject()
    }
}

module.exports = UserService