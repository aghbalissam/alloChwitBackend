const express = require('express')
const Order = require('../models/order')
const router = express.Router()


router.post('/alloChwit/api/orders/newOrder', (req, res) => {

    let data = req.body;
    let order = new Order(data.orders);
    // Date Type 
    let dt = GenearateDt();
    order.date = dt.dd + '-' + dt.mm + '-' + dt.yy;
    order.time = dt.hh + ':' + dt.mi + ':' + dt.ss;

    order.save((err, suc) => {
        if(err)
            res.send('error hzefez');
        else 
            res.send(req.body.orders);
    })
})


router.get('/alloChwit/api/orders/:idRes', (req, res) => 
{
    Order.find({ idRes : idRes }, (err, ord) => 
    {
        if(orr)
            res.send(orr)
        else
            res.send('Aucune Commande')
    })  
})

// functions to generate Date & Time

function GenearateDt()
{
    let d = new Date();
    
    let datetime = {
        'dd' : d.getDay(),
        'mm' : d.getMonth() + 1,
        'yy' : d.getFullYear(),
        'hh' : d.getHours(),
        'mi' : d.getMinutes(),
        'ss' : d.getSeconds()
    } 

    return datetime;
}

module.exports = router;