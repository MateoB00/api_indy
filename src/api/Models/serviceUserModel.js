let db = require('../config/database');
// let moment = require('moment');
// moment.locale('fr');

class ServiceUser {

    constructor(result) {
        if (result == null) {
            this._id_service = null
            this._id_user = null
        } else {
            this._id_service = result.id_service
            this._id_user = result.id_user
        }
    }

    get id_service() {
        return this._id_service
    }

    get id_user() {
        return this._id_user
    }

    set id_service(res) {
        this._id_service = res
    }

    set id_user(res) {
        this._id_user = res
    }

    static createForAservice(id_service, ids_user = []) {
        let values = '';
        for (let i = 0; i < ids_user.length; i++) {
            let v = `(${id_service}, ${ids_user[i]}),`;
        }
        values = v.slice(0, -1);
        db.query(`INSERT INTO serviceusers (id_service, id_user) VALUES ${values}`, (err, res) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouveau');
            }
        })
    }

    static all(callback) {
        db.query('SELECT * FROM serviceusers ORDER BY id_service',
            function (err, serviceUsers) {
                callback(serviceUsers.map((data) => new ServiceUser(data)))
            })
    }

    static allByIdService(id_service, callback) {
        db.query('SELECT * FROM serviceusers WHERE id_service = ?', [id_service], (err, serviceUsers) => {
            callback(serviceUsers.map((data) => new ServiceUser(data)))
        })
    }
}
module.exports = ServiceUser