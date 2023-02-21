const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id : String,
    name : String,
    email : String,
    phone : String,
    password : String,
})

module.exports = mongoose.model('user', userSchema, 'users');

