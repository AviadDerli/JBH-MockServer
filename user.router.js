const express = require('express');
const router = express.Router();

let { users } = require('./user.data')

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
        if(!p) throw 'User is not exist'
        res.send(p)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(404).send(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let i = users.findIndex(p => p.id == req.params.id)
        if (i => 0) users = users.filter(u => u.id != req.params.id)
        res.send(i >= 0 ? true : false)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, dateOfBirth } = req.body;
        if (!firstName || !lastName || !email || !dateOfBirth) throw "Invalid Input"

        let p = users.find(p => p.email == req.body?.email)
        if(p) throw 'User is exist'

        let id = Math.max(...users.map(u => u.id))
        let newUser = { id: id + 1, firstName, lastName, email, dateOfBirth }
        users.push(newUser)
        res.send({ ...newUser, createdDate: new Date() })
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let p = users.find(p => p.id == req.params.id)
        if (!p) throw "The user does not exist"

        delete req.body.id;

        const { firstName, lastName, email, dateOfBirth } = req.body;
        p.firstName = firstName ?? p.firstName
        p.lastName = lastName ?? p.lastName
        p.email = email ?? p.email
        p.dateOfBirth = dateOfBirth ?? p.dateOfBirth

        res.send({ ...p, updatedDate: new Date() })
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(400).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {

        let p = users.find(p => p.email == req.body?.userName)
        if(!p || req.body?.password != '1234') throw "The username or password is incorrect"
        
        let user = {
            userName: req.body.userName,
            avatar: "https://openclipart.org/image/800px/322492",
            token:  Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2) }
        res.send(user)
    }
    catch (e) {
        console.log("***ERROR***\n" + e);
        res.status(401).send(e)
    }
})
module.exports = router