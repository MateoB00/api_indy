module.exports = (server) => {
    const serviceUserController = require('../Controllers/serviceUserController')

    server.route('/service/user/new')
        .post(serviceUserController.createServiceUser)
    server.route('/service/user')
        .get(serviceUserController.allServiceUser)
    server.route('/service/users')
        .get(serviceUserController.allServiceUserByIdService)
}