const tableTips = require('../models/tableTipsModel');
const tipsPayment = require('../models/tipsPaymentModel');

exports.createTips = (req, res) => {
    tableTips.create(req.body.tips, req.body.id_restaurant, req.body.id_service, () => {
        res.json(result);
    })
}

exports.createTipsPayment = (req, res) => {
    tipsPayment.create(req.body.amount, req.body.id_user, () => {
        res.json(result);
    })
}

exports.listAllTipsByIdService = (req, res) => {
    tableTips.allByIdService(req.body.id_service, (result) => {
        res.json(result);
    })
}

exports.allTipsOfMonth = (req, res) => {
    tableTips.getAllTipsPerMonth(date = req.body.date, (result) => {
        res.json(result);
    })
}

// exports.tipsOfTheWeek = (req, res) => {
//     tableTips.getBestTipsWeek((result) => {
//         res.json(result);
//     })
// }

exports.tipsOfTheWeek = (req, res) => {
    tipsPayment.getBestWeekTipsPerMonthInActualYear((result) => {
        res.json(result);
    })
}

exports.lastTips = (req, res) => {
    tipsPayment.getLastPaymentByUserId(req.params.id, (result) => {
        res.json(result);
    })
}
