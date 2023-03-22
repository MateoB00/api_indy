const tableTips = require('../models/tableTipsModel');
const tipsPayment = require('../models/tipsPaymentModel');

exports.createTips = (req, res) => {
    tableTips.create(req.body.tips, req.body.id_restaurant, req.body.id_service, (result) => {
        res.json(result);
    })
}

exports.createTipsPayment = (req, res) => {
    tipsPayment.create(req.body.amount, req.body.id_user, (result) => {
        res.json(result);
    })
}

exports.listAllTipsByIdService = (req, res) => {
    tableTips.allByIdService(req.params.id_service, (result) => {
        res.json(result);
    })
}

exports.allTipsOfMonth = (req, res) => {
    let date = req.params.date
    tableTips.getAllTipsPerMonth(date, (result) => {
        res.json(result);
    })
}

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

exports.createAndRedistributeTips = (req, res) => {
    tipsPayment.createAndRedistributeTips(req.body.id_service, (result) => {
        res.json(result);
    })
}