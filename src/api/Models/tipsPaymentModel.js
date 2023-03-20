let db = require('../config/database');
// let moment = require('moment');
// moment.locale('fr');

class TipsPayment {

    constructor(result) {
        if (result == null) {
            this._id = null
            this._created_at = null
            this._modified_at = null
            this._amount = null
            this._i_user = null
        } else {
            this._id = result.id
            this._created_at = result.created_at
            this._modified_at = result.modified_at
            this._amount = result.amount
            this._id_user = result.id_user
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
    get amount() {
        return this._amount
    }
    get id_user() {
        return this._id_user
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
    set amount(res) {
        this._amount = res
    }
    set id_user(res) {
        this._id_user = res
    }

    static create(amount, id_user, callback) {
        db.query('INSERT INTO tipspayments (amount, id_user) VALUES (?,?)', [amount, id_user], (err, res) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouvel paiement de :', amount, ' a ', id_user);
            }
        })
    }
}
module.exports = TipsPayment