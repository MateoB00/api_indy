let db = require('../config/database');
// let moment = require('moment');
// moment.locale('fr');

class Service {

    constructor(result) {
        if (result == null) {
            this._id = null
            this._created_at = null
            this._modified_at = null
            this._shiftType = null
            this._shiftClosed = null
        } else {
            this._id = result.id
            this._created_at = result.created_at
            this._modified_at = result.modified_at
            this._shiftType = result.shiftType
            this._shiftClosed = result.shiftClosed
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
    get shiftType() {
        return this._shiftType
    }
    get shiftClosed() {
        return this._shiftClosed
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
    set shiftType(res) {
        this._shiftType = res
    }
    set shiftClosed(res) {
        this._shiftClosed = res
    }

    static all(callback) {
        db.query('SELECT * FROM services ORDER BY shiftType',
            function (err, datas) {
                callback(datas.map((d) => new Service(d)))
            })
    }
    static create(shiftType, shiftClosed, callback) {
        db.query('INSERT INTO services (shiftType, shiftClosed) VALUES (?,?)', [shiftType, shiftClosed], (err, res) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouveau service enregistré');
            }
        })
    }
}
module.exports = Service