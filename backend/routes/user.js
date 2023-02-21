const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const router = express.Router()
const jwt = require('jsonwebtoken')


router.post('/alloChwit/api/user/login', (req, res) => 
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


router.post('/alloChwit/api/user/register', (req, res) => 
{
    let data = req.body;
    let user = new User(data);
    
    // Hash Password

    user.save((err,suc) => 
    {
        if(err)
            res.send('error');
        else
            res.send('success');
    });
})  


module.exports = router;