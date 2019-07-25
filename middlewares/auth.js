const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.cookies.login_token;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.json({err});

            req.decoded = decoded;
            next();
        })
    } else {
        return res.status(403).send('Please login ... ');
    }
}

module.exports = auth;