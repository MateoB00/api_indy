module.exports = (server) => {
    const restaurantTableController = require('../Controllers/restaurantTableController')

    server.route('/tables')
        .post(restaurantTableController.createTable)
}