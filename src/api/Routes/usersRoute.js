module.exports = (server) => {
    const userController = require('../Controllers/userController')

    server.route('/users')
        .get(userController.listAllUsers)
    server.route('/users/active')
        .get(userController.listAllActive)
    server.route('/users/not_active')
        .get(userController.listAllNotActive)
    server.route('/user/:id')
        .get(userController.getOneUserById)
}