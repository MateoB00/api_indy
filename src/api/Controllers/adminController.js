const User = require('../models/userModel');

exports.deleteUser = (req, res) => {
    User.delete(req.body.id, (result) => {
        res.json(result);
    })
}
