const express = require('express');
const router = express.Router();

const { categories, cars } = require('./car.data')

router.get('/categories', async (req, res) => {
    try {
        res.send(categories)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/categories/:catId', async (req, res) => {
    try {
        res.send(cars.filter(c => c.categoryId == req.params.catId))
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        res.send(cars.find(c => c.modelId == req.params.id))
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/', async (req, res) => {
    try {
        res.send(cars.map(c => {
            return {
                categoryId: c.categoryId,
                modelId: c.modelId,
                model: c.model,
                manufacture: c.manufacture,
                price: c.price
            }
        }))
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

// router.delete('/:id', async (req, res) => {
//     try {
//         let i = data.fruits.findIndex(p => p.id == req.params.id)
//         res.send(delete data.fruits[i])
//     }
//     catch (e) {
//         console.log("***ERROR***\n" + e);
//         res.status(400).send(e)
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//         let c = data.fruits.push(req.body)
//         res.send(c)
//     }
//     catch (e) {
//         console.log("***ERROR***\n" + e);
//         res.status(400).send(e)
//     }
// })


module.exports = router