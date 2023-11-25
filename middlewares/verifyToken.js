// middlewares 
// const verifyToken = (req, res, next) => {
//     // console.log('inside verify token', req.headers.authorization);
//     if (!req.headers.authorization) {
//         return res.status(401).send({ message: 'unauthorized access' });
//     }
//     const token = req.headers.authorization.split(' ')[1];
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).send({ message: 'unauthorized access' })
//         }
//         req.decoded = decoded;
//         next();
//     })
// }


// const jwt = require("jsonwebtoken");

// const checkLogin = (req, res, next) => {
//     const { authorization } = req.headers;
//     try {
//         const token = authorization.split(' ')[1];
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const { username, userId } = decoded;
//         req.username = username;
//         req.userId = userId;
//         next();
//     } catch (err) {
//         next("Authentication failure!");
//     }
// };

// module.exports = checkLogin;

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send({ message: "Unauthorized access!" });
    }
    try {
        const token = authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized access!" });
            }
            req.decoded = decoded;
            next();
        });
    } catch (err) {
        next("Authentication failure!");
    }
}

module.exports = verifyToken;