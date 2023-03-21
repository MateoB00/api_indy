const User = require('../models/userModel');
const jwtMiddleware = require("../Middlewares/jwtMiddleware");

exports.deleteUser = (req, res) => {
    User.delete(req.params.id, (result) => {
        res.json(result);
    })
}

exports.setNotActive = (req, res) => {
    User.setNotActive(req.params.id, () => {
        res.json(result);
    })
}

exports.createUser = (req, res) => {
    User.create(req.body.firstname, req.body.lastname, req.body.status, req.body.active, () => {
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

exports.loginAdmin = (req, res) => {
    User.loginAdmin(req.body.code_admin, (result) => {
        const token = jwtMiddleware.sign({ result }, process.env.JWT_KEY)
        res.json({ token });
    })
}