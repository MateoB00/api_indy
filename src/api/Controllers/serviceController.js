const service = require('../models/serviceModel');

exports.createService = (req, res) => {
    service.create(req.body.shiftType, req.body.shiftClosed, () => {
        res.json(result);
    })
}