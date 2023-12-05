const express = require('express');
const router = express.Router();

const data = require('./fruit.data')

router.get('/', async (req, res) => {
    try {
        res.send(data.fruits)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let p = data.fruits.find(p=>p.id==req.params.id)
        res.send(p)
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        let i = data.fruits.findIndex(p=>p.id==req.params.id)
        res.send(delete data.fruits[i])
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        let c = data.fruits.push(req.body)
        res.send(c)
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})


module.exports = router