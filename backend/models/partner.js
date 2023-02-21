const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    _id: String,
    email : String,
    password : String,
    address : [String],
    email : String,
    description : String,
    phone : String,
    password  :String,
    image : String,
    categories : [String],
    shipping : String,
    rating : String,
    type : String,
    days : String,
    hours : String,
    slogan : String,
    city : String
})

module.exports = mongoose.model('partner', partnerSchema, 'partners')