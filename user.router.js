const express = require('express');
const router = express.Router();

const data = require('./user.data')

const {genId,token} = require('./helper')



router.post('/login', async (req, res) => {
    try {
        let {userName,password,isCon} = req.body
        if(!userName || !password) throw "Error inputs"

        let r = {
            status : true,
            user:{
                id : genId(userName) ,
                userName,
                lastConnect : new Date(),
            },
            token : token(),
        }
        res.send(r)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send({status : false , error:e})
    }
})
router.post('/validate', async (req, res) => {
    try {
        if(!req.body.token) throw "error token"

        let r = {
            status : true,
            user:{
                id : genId("Anonymous") ,
                userName:"Anonymous",
                lastConnect : new Date(),
            },
            token : token(),
        }
        res.send(r)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send({status : false , error:e})
    }
})

// router.get('/', async (req, res) => {
//     try {
//         res.send(data.users)
//     }
//     catch (e) {
//         console.log("***ERROR***\n" + e);
//         res.status(400).send(e)
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         let p = data.users.find(p=>p.id==req.params.id)
//         res.send(p)
//     }
//     catch (e) { 
//         console.log("***ERROR***\n" + e);
//         res.status(400).send(e)
//     }
// })
// router.delete('/:id', async (req, res) => {
//     try {
//         let i = data.users.findIndex(p=>p.id==req.params.id)
//         res.send(delete data.users[i])
//     }
//     catch (e) { 
//         console.log("***ERROR***\n" + e);
//         res.status(400).send(e)
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//         let c = data.users.push(req.body)
//         res.send(c)
//     }
//     catch (e) { 
//         console.log("***ERROR***\n" + e);
//         res.status(400).send(e)
//     }
// })


module.exports = router