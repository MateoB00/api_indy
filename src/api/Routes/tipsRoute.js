module.exports = (server) => {
    const tipsController = require('../Controllers/tipsController')

    server.route('/tips/new')
        .post(tipsController.createTips)
    server.route('/tips/payment')
        .post(tipsController.createTipsPayment)
    server.route('/tips/service')
        .get(tipsController.listAllTipsByIdService)
    server.route('/tips/month')
        .get(tipsController.allTipsOfMonth)
    server.route('/tips/week')
        .get(tipsController.tipsOfTheWeek)
}