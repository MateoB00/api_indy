module.exports = (server) => {
    const userController = require('../Controllers/userController')

    server.route('/users')
        .get(userController.listAllUsers)
        .post(userController.createUser)
    server.route('/users/active')
        .get(userController.listAllActive)
    server.route('/users/not_active')
        .get(userController.listAllNotActive)
}