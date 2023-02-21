const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    _id : String,
    name : String,
    idR : String,
    idP : String,  // Why
    slogan : String,
    menus : [] // add Model to this object 
})

module.exports = mongoose.model('menu', menuSchema, 'menus');

 