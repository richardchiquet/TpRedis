const express = require('express');
const router = express.Router();
const User = require('../models/users');


router.get('/', async (req, res) =>{
    try{
        const user = await User.find();
        res.json(user); 
    } 
    catch(err){
        res.json({message : err})
    }
})

router.post('/', async (req,res) =>{
    const user = new User({
        nom : req.body.nom,
        prenom : req.body.prenom,
        password: req.body.password,
        email : req.body.email
    })
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch (err){
        res.json({message : err});
    }
});

module.exports = router;