const express = require('express');
const router = express.Router();

const data = require('./user.data')

router.get('/', async (req, res) => {
    try {
        res.send(data.users)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let p = data.users.find(p=>p.id==req.params.id)
        res.send(p)
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        let i = data.users.findIndex(p=>p.id==req.params.id)
        res.send(delete data.users[i])
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        let c = data.users.push(req.body)
        res.send(c)
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})


module.exports = router