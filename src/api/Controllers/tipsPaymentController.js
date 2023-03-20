const tipsPayment = require('../models/tipsPaymentModel');

exports.createTipsPayment = (req, res) => {
    tipsPayment.create(req.body.amount, req.body.id_user, () => {
        res.json(result);
    })
}