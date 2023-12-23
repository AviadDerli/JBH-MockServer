const express = require('express');
const router = express.Router();

const { users } = require('./user.data')

router.get('/', async (req, res) => {
    try {
        res.send(users)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        let p = users.find(p => p.id == req.params.id)
        res.send(p)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let i = users.findIndex(p => p.id == req.params.id)
        res.send(delete data.users[i])
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, dateOfBirth } = req.body;
        if(!firstName || !lastName || !email) throw "Invalid Input"

        let id = Math.max(...users.map(u=>u.id))
        req.body.id = id+1
        users.push(req.body)
        res.send({...req.body,createdDate:new Date()})
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let p = users.find(p => p.id == req.params.id)
        if(!p) throw "The user does not exist"

        delete req.body.id;
        
        const { firstName, lastName, email, dateOfBirth } = req.body;
        p.firstName = firstName ?? p.firstName
        p.lastName = lastName ?? p.lastName
        p.email = email ?? p.email
        p.dateOfBirth = dateOfBirth ?? p.dateOfBirth

        res.send({...p,updatedDate:new Date()})
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

module.exports = router