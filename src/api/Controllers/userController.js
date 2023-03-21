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

exports.getOneUserById = (req, res) => {
    User.getOneUserById(req.params.id, (result) => {
        res.json(result);
    })
}