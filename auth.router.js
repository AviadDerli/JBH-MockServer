const express = require('express');
const router = express.Router();

const data = require('./old/old.user.data')

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
                avatar : "https://openclipart.org/image/800px/322492",
                lastConnect : new Date(),
            },
            token : token(),
        }
        res.send(r)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(401).send({status : false , error:e})
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



module.exports = router