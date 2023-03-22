let db = require('../config/database');
// let moment = require('moment');
// moment.locale('fr');

class TableTips {

    constructor(result) {
        if (result == null) {
            this._id = null
            this._created_at = null
            this._modified_at = null
            this._tips = null
            this._id_restaurantTable = null
            this._id_service = null
        } else {
            this._id = result.id
            this._created_at = result.created_at
            this._modified_at = result.modified_at
            this._tips = result.tips
            this._id_restaurantTable = result.id_restaurantTable
            this._id_service = result.id_service
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
    get tips() {
        return this._tips
    }
    get id_restaurantTable() {
        return this._id_restaurantTable
    }
    get id_service() {
        return this._id_service
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
    set tips(res) {
        this._tips = res
    }
    set id_restaurantTable(res) {
        this._id_restaurantTable = res
    }
    set id_service(res) {
        this._id_service = res
    }

    static create(tips, id_restaurantTable, id_service) {
        db.query('INSERT INTO tabletips (tips, id_restaurantTable, id_service) VALUES (?,?,?)', [tips, id_restaurantTable, id_service], (err, res) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouvel tips:', tips);
            }
        })
    }

    static allByIdService(id_service, callback) {
        db.query('SELECT * FROM tabletips WHERE id_service = ?', [id_service], (err, tableTips) => {
            callback(tableTips.map((tips) => new TableTips(tips)))
        })
    }

    static getAllTipsPerMonth(date = 'NOW()', callback) {
        db.query(`SELECT DATE_FORMAT(created_at, '%Y-%m') AS month, SUM(tips) AS total_amount FROM tabletips GROUP BY month`, (err, tableTips) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log(typeof (date))
                callback(tableTips)
            }
        })

    }

    // static getBestTipsWeek(param = 'NOW()', callback) {
    //     db.query("SELECT * FROM `tabletips` WHERE WEEK(DATE_FORMAT(created_at, '%Y-%m-%d')) = WEEK(DATE_FORMAT(NOW(), '%Y-%m-%d')) ORDER BY `tips` DESC LIMIT 1", (err, tableTips) => {
    //         if (err) {
    //             console.error('Erreur ', err);
    //         } else {
    //             callback(tableTips.map((tips) => new TableTips(tips)))
    //         }
    //     })
    // }
}
module.exports = TableTips