const express = require('express');
const router = express.Router();

const data = require('./item.data')

router.get('/categories', async (req, res) => {
    try {
        res.send({
            fruits: "https://cdn-icons-png.flaticon.com/512/3194/3194766.png",
            vegetables: "https://cdn-icons-png.flaticon.com/512/10107/10107601.png",
            alcohol: "https://cdn-icons-png.flaticon.com/512/920/920582.png",
            dairy: "https://cdn-icons-png.flaticon.com/512/2674/2674486.png",
        })
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/categories/:name', async (req, res) => {
    try {
        res.send(data[req.params.name])
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/items/:id', async (req, res) => {
    try {
        for (i in data) {
            let item = data[i].find(p => p.id == req.params.id)
            if (item) return res.send(item)
        }
        res.send()
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