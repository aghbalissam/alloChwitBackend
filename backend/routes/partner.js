const express = require('express')
const Partner = require('../models/partner')
const bcrypt = require('bcryptjs')
const router = express.Router()
const jwt = require('jsonwebtoken')



router.post('/alloChwit/api/partner/login', (req, res) => {
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

router.get('/alloChwit/api/:city/restaurants', (req, res) => 
{
    Partner.find({ city : req.params.city }, (err, partners ) => {
        res.send(partners);
    })
})

router.get('/alloChwit/api/restaurants/:slugRes', (req, res) => 
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



// router.get('/alloChwit/api/restaurants/:idRes', (req, res) => 
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

router.get('/alloChwit/api/restaurants/menus/:slg', (req, res) => 
{   
    Menu.findOne({
        // idR : req.params.idRes
        slogan : req.params.slg
    }, (err, m) => {
        res.send(
            {
                'm' : m.menus
            }
        );
    })
})

module.exports = router;