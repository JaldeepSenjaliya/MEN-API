const express = require('express');
const { addListener } = require('../models/user');
const router = express.Router();
const User = require('../models/user');


//http://localhost:3000/ : GET
router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.send('Error: '+error)
    
    }
});

//http://localhost:3000/id : POST
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.send("Error: "+error);
    }
});

//http://localhost:3000/ : PATCH
router.post('/', async (req, res) => {
        const user = new User ({
            name: req.body.name,
            tech: req.body.tech,
            sub:  req.body.sub
        })

    try {
        const user1 = await user.save();
        res.json(user1)
    } catch (error) {
        res.send('Error: '+error);
    }
});

//http://localhost:3000/id : DELETE
router.patch('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.name = req.body.name
        user.tech = req.body.tech
        user.sub = req.body.sub;
        const user1 = await user.save();
        res.json(user1)
    } catch (error) {
        res.send("Error: "+error)
    }
});

//http://localhost:3000/id
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const user1 = user.delete();
        res.json(user1)

    } catch (error) {
        res.send("Error: "+error)
    }
});


module.exports = router;
