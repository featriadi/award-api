import jwt from 'jsonwebtoken'
import 'dotenv/config'

export async function verifyToken(req, res, next) {
    const tokenHeader  = req.headers.authorization;
    const token = tokenHeader.split(' ')

    if (token[0] !== 'Bearer') {
        return res.status(500).send({
            status: "error",
            message: "Incorrect token format"
        });
    }

    jwt.verify(token[1], process.env.JWT_SECRET_ACCESS_TOKEN, function(err, decoded) {
        if(err){
            return res.status(403).json({
                message: err.message
            });
        }

        req.user = decoded;
        return next();
    });
}