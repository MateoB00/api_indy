module.exports = (server) => {
    const tableTipsController = require('../Controllers/tableTipsController')

    server.route('/tips/new')
        .post(tableTipsController.createTips)
    server.route('/tips/service')
        .get(tableTipsController.listAllTipsByIdService)
    server.route('/tips/month')
        .get(tableTipsController.allTipsOfMonth)
    server.route('/tips/week')
        .get(tableTipsController.tipsOfTheWeek)
}