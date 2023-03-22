module.exports = (server) => {
    const adminController = require('../Controllers/adminController')
    const jwtMiddleware = require("../Middlewares/jwtMiddleware");

    server.route('/admin/user/delete/:id')
        .delete(jwtMiddleware.verifyToken, adminController.deleteUser)
    server.route('/admin/user/not_active/:id')
        .put(jwtMiddleware.verifyToken, adminController.setNotActive)
    server.route('/admin/user/create')
        .post(jwtMiddleware.verifyToken, adminController.createUser)
    server.route('/check_admin')
        .get(jwtMiddleware.verifyToken, adminController.checkAdmin)
}