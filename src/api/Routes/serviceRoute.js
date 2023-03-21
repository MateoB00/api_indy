module.exports = (server) => {
    const serviceController = require('../Controllers/serviceController')

    server.route('/service/new')
        .post(serviceController.createService)
    server.route('/service/user/new')
        .post(serviceController.createServiceUser)
    server.route('/service/user')
        .get(serviceController.allServiceUser)
    server.route('/service/users')
        .get(serviceController.allServiceUserByIdService)
}