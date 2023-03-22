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

    static create(amount, id_user) {
        db.query('INSERT INTO tipspayments (amount, id_user) VALUES (?,?)', [amount, id_user], (err, res) => {
            if (err) {
                console.error('Erreur ', err);
            } else {
                console.log('Nouvel paiement de :', amount, ' a ', id_user);
            }
        })
    }

    static createAndRedistributeTips(id_service, callback) {
        console.log(id_service)
        db.query('INSERT INTO tipsPayments (created_at, modified_at, amount, id_user) SELECT NOW(), NOW(), (SELECT SUM(tips) FROM tableTips WHERE id_service = 1) / (SELECT COUNT(DISTINCT id_user) FROM serviceUsers WHERE id_service = 1), id_user FROM serviceUsers WHERE id_service = 1 GROUP BY id_user;', [id_service], (err, res) => {
            callback((res))
        })
    }

    static getBestWeekTipsPerMonthInActualYear(callback) {
        db.query('WITH tips_per_day AS (SELECT DATE(created_at) AS day_start, SUM(amount) AS total_tips FROM tipspayments WHERE YEAR(created_at) = YEAR(NOW()) GROUP BY day_start), tips_per_week AS (SELECT DATE(DATE_SUB(day_start, INTERVAL WEEKDAY(day_start) DAY)) AS week_start, WEEK(day_start) AS week_number, day_start, total_tips, ROW_NUMBER() OVER (PARTITION BY DATE(DATE_SUB(day_start, INTERVAL WEEKDAY(day_start) DAY)) ORDER BY total_tips DESC) AS rank FROM tips_per_day) SELECT week_number, day_start AS day, total_tips FROM tips_per_week WHERE rank = 1 ORDER BY week_number',
        function (err, results) {
            callback((results))
        })
    }

    static getLastPaymentByUserId(user_id, callback){
        db.query('SELECT * FROM `tipspayments` WHERE id_user = ? ORDER BY created_at DESC LIMIT 1;', [user_id], 
        function (err, results) {
            callback(results.map((result) => new TipsPayment(result)))
        })
    }
}
module.exports = TipsPayment