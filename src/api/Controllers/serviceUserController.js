const serviceUser = require('../models/serviceUserModel');

exports.createServiceUser = (req, res) => {
    serviceUser.create(req.body.id_service, req.body.id_user, () => {
        res.json(result);
    })
}

exports.allServiceUser = (req, res) => {
    serviceUser.all((result) => {
        res.json(result);
    })
}

exports.allServiceUserByIdService = (req, res) => {
    serviceUser.allByIdService(req.body.id_service, (result) => {
        res.json(result);
    })
}