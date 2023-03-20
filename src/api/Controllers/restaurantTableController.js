const RestaurantTable = require('../models/restaurantTableModel');

exports.createTable = (req, res) => {
    RestaurantTable.create(req.body.name, () => {
        res.json(result);
    })
}