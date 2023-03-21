module.exports = (server) => {
    const tipsController = require('../Controllers/tipsController')

    server.route('/tips/new')
        .post(tipsController.createTips)
    server.route('/tips/payment')
        .post(tipsController.createTipsPayment)
    server.route('/tips/service/:id')
        .get(tipsController.listAllTipsByIdService)
    server.route('/tips/month/:date')
        .get(tipsController.allTipsOfMonth)
    server.route('/tips/week')
        .get(tipsController.tipsOfTheWeek)
}