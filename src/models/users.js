const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const Userschema = new Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
},{
    versionkey: false,
    timestamps: true
})

const UserModel = model('users', Userschema)

module.exports = UserModel