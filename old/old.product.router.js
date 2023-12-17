const express = require('express');
const router = express.Router();

const data = require('./product.data')

router.get('/', async (req, res) => {
    try {
        res.send(data.products)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/categories', async (req, res) => {
    try {
        console.log(data.categories);
        res.send(JSON.stringify(data.categories))
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let p = data.products.find(p=>p.id==req.params.id)
        res.send(p)
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        let i = data.products.findIndex(p=>p.id==req.params.id)
        res.send(delete data.products[i])
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        let c = data.products.push(req.body)
        res.send(c)
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})



router.get('/categories/:category', async (req, res) => {
    try {
        let pofc = data.products.filter(p=>p.category==req.params.category)
        res.send(pofc)
    }
    catch (e) { 
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

module.exports = router