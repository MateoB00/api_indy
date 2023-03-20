module.exports = (server) => {
    const tipsPaymentController = require('../Controllers/tipsPaymentController')

    server.route('/tips/payment')
        .post(tipsPaymentController.createTipsPayment)
}