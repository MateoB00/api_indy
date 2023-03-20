module.exports = (server) => {
    const serviceController = require('../Controllers/serviceController')

    server.route('/service/new')
        .post(serviceController.createService)
}