const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const jwtKey = process.env.JWT_KEY;
    const token = req.headers["authorization"];

    if (token !== undefined) {
        jwt.verify(token, jwtKey, (error, payload) => {
            if(error) {
                console.error(error);
                res.status(403)
                res.json({message: 'accès interdit: mauvais token'})
            } else {
                next();
            }
        })
    } else {
        res.status(403);
        res.json({message: 'Accès interdit: token manquant'})
    }
} 