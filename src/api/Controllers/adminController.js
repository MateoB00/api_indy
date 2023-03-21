const User = require('../models/userModel');

exports.deleteUser = (req, res) => {
    User.delete(req.body.id, (result) => {
        res.json(result);
    })
}

exports.setNotActive = (req, res) => {
    User.setNotActive(req.body.id, () => {
        res.json(result);
    })
}

exports.createUser = (req, res) => {
    User.create(req.body.firstname, req.body.lastname, req.body.status, req.body.active, () => {
        res.json(result);
    })
}