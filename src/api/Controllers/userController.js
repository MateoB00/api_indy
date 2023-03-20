const User = require('../models/userModel');

exports.listAllUsers = (req, res) => {
    User.all((result) => {
        res.json(result);
    })
}

exports.listAllActive = (req, res) => {
    User.allActive((result) => {
        res.json(result);
    })
}

exports.listAllNotActive = (req, res) => {
    User.allNotActive((result) => {
        res.json(result);
    })
}

exports.createUser = (req, res) => {
    User.create(req.body.firstname, req.body.lastname, req.body.status, req.body.active, () => {
        res.json(result);
    })
}