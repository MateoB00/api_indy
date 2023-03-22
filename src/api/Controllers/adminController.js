const User = require('../models/userModel');

exports.deleteUser = (req, res) => {
    User.delete(req.params.id, (result) => {
        res.json(result);
    })
}

exports.setNotActive = (req, res) => {
    User.setNotActive(req.params.id, (result) => {
        res.json(result);
    })
}

exports.createUser = (req, res) => {
    User.create(req.body.firstname, req.body.lastname, req.body.status, req.body.active, (result) => {
        res.json(result);
    })
}

exports.setNotActive = (req, res) => {
    User.setNotActive(req.body.id, (result) => {
        res.json(result);
    })
}

exports.createUser = (req, res) => {
    User.create(req.body.firstname, req.body.lastname, req.body.status, req.body.active, (result) => {
        res.json(result);
    })
}

exports.checkAdmin = (req, res) => {
    User.checkLoginAdmin(req.body.code_admin, (result) => {
        console.log(result)
        res.json(result)
    })
}