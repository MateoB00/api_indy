let db = require('../config/database');
// let moment = require('moment');
// moment.locale('fr');

class User {

    constructor(result) {
        if (result == null) {
            this._id = null
            this._created_at = null
            this._modified_at = null
            this._firstname = null
            this._lastname = null
            this._status = null
            this._active = null
            this._code_admin = null
        } else {
            this._id = result.id
            this._created_at = result.created_at
            this._modified_at = result.modified_at
            this._firstname = result.firstname
            this._lastname = result.lastname
            this._status = result.status
            this._active = result.active
            this._code_admin = result.code_admin || null
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
    get firstname() {
        return this._firstname
    }
    get lastname() {
        return this._lastname
    }
    get status() {
        return this._status
    }
    get active() {
        return this._active
    }
    get code_admin() {
        return this._code_admin
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
    set firstname(res) {
        this._firstname = res
    }
    set lastname(res) {
        this._lastname = res
    }
    set status(res) {
        this._status = res
    }
    set active(res) {
        this._active = res
    }
    set code_admin(res) {
        this._code_admin = res
    }

    static all(callback) {
        db.query('SELECT * FROM users',
            function (err, users) {
                callback(users.map((user) => new User(user)))
            })
    }

    static allInKitchen(callback) {
        db.query('SELECT * FROM users WHERE status = 0',
            function (err, users) {
                callback(users.map((user) => new User(user)))
            })
    }

    static allInService(callback) {
        db.query('SELECT * FROM users WHERE status = 1',
            function (err, users) {
                callback(users.map((user) => new User(user)))
            })
    }

    static allActive(callback) {
        db.query('SELECT * FROM users WHERE active = 1',
            function (err, users) {
                callback(users.map((user) => new User(user)))
            })
    }

    static allNotActive(callback) {
        db.query('SELECT * FROM users WHERE status = 0',
            function (err, users) {
                callback(users.map((user) => new User(user)))
            })
    }

    static create(firstname, lastname, status, active, results) {
        db.query('INSERT INTO users (firstname, lastname, status, active) VALUES (?,?,?,?)', [firstname, lastname, status, active], (err, results) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouvel utilisateur:', firstname);
            }
        })
    }

    static delete(id, results) {
        db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Utilisateur supprimé');
            }
        })
    }

    static setNotActive(id, callback) {
        db.query('UPDATE `users` SET `active`= 0 WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Utilisateur viré');
            }
        })
    }

    static getOneUserById(id, results) {
        db.query('SELECT * FROM users WHERE id = ?', [id], 
        function (err, users) {
            callback(users.map((user) => new User(user)))
        })
    }
    
    static getUsersWithHisSolde(callback){
        db.query('SELECT users.*, SUM(tipspayments.amount) AS soldeTotal FROM users INNER JOIN tipspayments ON users.id = tipspayments.id_user GROUP BY users.id', 
        function (err, users) {
            callback(users.map((user) => new User(user)))
        })
    }

    static getUserWithHisSolde(user_id, callback){
        db.query('SELECT users.*, SUM(tipspayments.amount) AS soldeTotal FROM users INNER JOIN tipspayments ON users.id = tipspayments.id_user WHERE users.id = ?;', [user_id], 
        function (err, users) {
            callback(users.map((user) => new User(user)))
        })
    }
}
module.exports = User