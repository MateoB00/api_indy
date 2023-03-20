module.exports = (server) => {
    const adminController = require('../Controllers/adminController')

    server.route('/delete/user')
        .delete(adminController.deleteUser)
}