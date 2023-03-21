module.exports = (server) => {
    const adminController = require('../Controllers/adminController')

    server.route('/admin/user/delete')
        .delete(adminController.deleteUser)
    server.route('/admin/user/not_active')
        .put(adminController.setNotActive)
    server.route('/admin/user/create')
        .post(adminController.createUser)
}