const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    idRes: String,
    nameRes : String,
    slugRes : String,
    products : [Object],
    // total : Number,
    date : String, 
    time : String, 
    state : Boolean
})

module.exports = mongoose.model('order', orderSchema, 'orders')