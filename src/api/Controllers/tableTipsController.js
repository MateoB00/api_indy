const tableTips = require('../models/tableTipsModel');

exports.createTips = (req, res) => {
    tableTips.create(req.body.tips, req.body.id_restaurant, req.body.id_service, () => {
        res.json(result);
    })
}

exports.listAllTipsByIdService = (req, res) => {
    tableTips.allByIdService(req.body.id_service, (result) => {
        res.json(result);
    })
}

exports.allTipsOfMonth = (req, res) => {
    tableTips.getAllTipsOfMonth((result) => {
        res.json(result);
    })
}

exports.tipsOfTheWeek = (req, res) => {
    tableTips.getBestTipsWeek((result) => {
        res.json(result);
    })
}