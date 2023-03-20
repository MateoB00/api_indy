let db = require('../config/database');
// let moment = require('moment');
// moment.locale('fr');

class RestaurantTable {

    constructor(result) {
        if (result == null) {
            this._id = null
            this._created_at = null
            this._modified_at = null
            this._name = null
        } else {
            this._id = result.id
            this._created_at = result.created_at
            this._modified_at = result.modified_at
            this._name = result.name
        }
    }

    get id() {
        return this._id
    }
    get created_at() {
        return this._created_at
    }
    get modified_at() {
        return this._modified_at
    }
    get name() {
        return this._name
    }

    set id(res) {
        this._id = res
    }

    set created_at(res) {
        this._created_at = res
    }

    set modified_at(res) {
        this._modified_at = res
    }
    set name(res) {
        this._name = res
    }

    static create(name, callback) {
        db.query('INSERT INTO restaurantTable (name) VALUES (?)', [name], (err, res) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouvelle Table :', name);
            }
        })
    }
}
module.exports = RestaurantTable