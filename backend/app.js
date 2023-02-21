const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const app = express();
const port = 3000;
const _log = console.log;

app.use(cors());
app.use(bodyParser.json());

// Models 
const Partner = require('./models/partner');
const User = require('./models/user');
const Menu = require('./models/menu');
const Order = require('./models/order');


// connection DB
const db = 'mongodb://localhost:27017/alloChwit';

mongoose.connect(db, err => {
    if(err)
    {
        _log(err)
    }
    else    
    {
        _log('success connection')
    }
})


/*
 * 
 *  Partners  
 * 
*/

app.post('/alloChwit/api/partner/login', (req, res) => {
    Partner.findOne({ email : req.body.email }, (err, p) => 
    {
        if(!err)
            if(p)
            {
                if(p.password === req.body.password) 
                    /*
                       name, slogan, city, image, categories, email, phone, description 
                    */
                    res.status(200).send(p);
                else
                    res.send('Mot de passe incorrect'); 
            }
            else
            {
                res.send( 'Partenaire !!!!!'); 
            }
        else 
            res.send(`!!!!!!!`);
    })
})

app.get('/alloChwit/api/:city/restaurants', (req, res) => 
{
    Partner.find({ city : req.params.city }, (err, partners ) => {
        res.send(partners);
    })
})

app.get('/alloChwit/api/restaurants/:slugRes', (req, res) => 
{
    // get data with slug
    Partner.findOne({
        slogan : req.params.slugRes
    }, (err, r) => {
        res.send(
            {
                'infos' : r
            }
        );
    })
})

// app.get('/alloChwit/api/restaurants/:idRes', (req, res) => 
// {   
//     // Get data with id 
//     Partner.findOne({
//         _id : req.params.idRes
//     }, (err, r) => {
//         res.send(
//             {
//                 'infos' : r
//             }
//         );
//     })
// })

app.get('/alloChwit/api/restaurants/menus/:slg', (req, res) => 
{   
    Menu.findOne({
        // idR : req.params.idRes
        slogan : req.params.slg
    }, (err, m) => {
        res.send(
            {
                // 'infos' : m, => localStorage 
                'm' : m.menus
            }
        );
    })
})


/*
 * 
 *  Users  
 * 
*/


app.post('/alloChwit/api/user/login', (req, res) => 
{
    // const jwtBearerToken = jwt.sign({
    //     algorithm: 'RS256',
    //     expiresIn: 120,
    //     subject: 'aalfalkf12312'
    // }
    User.findOne({ email : req.body.email }, (err, u) => 
    {
        if(!err)
        {
            if(u)
            {
                if(u.password === req.body.password)
                {
                    // Send Token
                    let payload = {
                        subject : u._id
                    }  
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({
                        token,
                        u
                    });
                }
                else
                    res.send('Mot de passe incorrect'); 
            }
            else
            {
                res.send('Utilisateur !!!!!' + req.body.email ); 
            }
        }
        else 
            res.send(`!!!!!!!`);
    })
}) 


app.post('/alloChwit/api/user/register', (req, res) => 
{
    let data = req.body;
    let user = new User(data);
    
    user.save((err,suc) => {
        if(err)
            res.send('error');
        else
            res.send('success');
    });
})  


/*
 *   
 *  Orders 
 * 
*/

app.post('/alloChwit/api/orders/newOrder', (req, res) => {

    let data = req.body;
    let order = new Order(data.order);
    // Date Type 
    let dt = GenearateDt();
    order.date = dt.dd + '-' + dt.mm + '-' + dt.yy;
    order.time = dt.hh + ':' + dt.mi + ':' + dt.ss;

    console.log(req.body);

    order.save((err, suc) => {
        if(err)
            res.send('error hzefez');
        else 
            res.send('commande ajouter avec succes');
    })
})

app.get('/alloChwit/api/orders/:idRes', (req, res) => 
{
    console.log(req.params.idRes);
    Order.find({ idRes : req.params.idRes }, (err, ord) => 
    {
        if(!err)
        {
            res.send(ord)
        }
        else
            res.send('Aucune Commande')
    })  
})


// io.on('connection', (socket) => 
// {
//     console.log('a user connected');
// });

/*
*   
*  Adrs 
* 
*/

// app.get('app/api/adrs',() => {
//     res.send();
// })


/*
* 
*  Search
* 
*/

app.get('/alloChwit/api/search/:searchTerm', async (req, res) => 
{
    console.log('zkazl ',req.params.searchTerm);
    // use city
    let term = req.params.searchTerm,
        ps = [],
        ms = []

    let partners = await Partner.find({});
    let menus = await Menu.find({});

    if(Array.isArray(partners))
    {
        // let p = {};
        partners.forEach(partner => 
        {   
            let n = partner._doc.name.toLowerCase().indexOf(term.toLowerCase());
            let d = partner._doc.description.toLowerCase().indexOf(term.toLowerCase());
            
            if(n!= -1 || d!= -1)
            {
                ps.push(partner);
            }
        })
    }

    // if(Array.isArray(menus))
    // {

    // }

    res.send({
        partners : ps,
        menus : ms,
    });
})

// functions to generate Date & Time

function GenearateDt()
{
    let d = new Date();
    let datetime = {
        'dd' : d.getDate(),
        'mm' : d.getMonth() + 1,
        'yy' : d.getFullYear(),
        'hh' : d.getHours(),
        'mi' : d.getMinutes(),
        'ss' : d.getSeconds()
    } 
    return datetime;
}


app.listen(port, () => {

    console.log('Allo ')
})