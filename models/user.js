const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        required: true,
        length: 1
    },   
    firstname:String,
    surname:String,
    profilPicture: String,
 
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;


