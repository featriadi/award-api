import 'dotenv/config'
import jwt from "jsonwebtoken"
import Validator from "fastest-validator";
const v = new Validator();

import User from "../models/User.js";

export async function login(req, res) {
    try {
        const schema = {
            email: 'email|empty:false',
        }
        const validate = v.validate(req.body, schema);

        if(validate.length){
            return res.status(400).json({
                status: 'error',
                message: validate
            });
        }

        const user = await User.findOne({
            email: req.body.email
        });

        if(!user){
            return res.status(401).json({
                status: 'error',
                message: 'Email Address is not exists'
            });
        }

        const accessToken = jwt.sign({ data: user }, process.env.JWT_SECRET_ACCESS_TOKEN, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRED });
        const refreshToken  = jwt.sign({ data: user }, process.env.JWT_SECRET_REFRESH_TOKEN, { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRED  });

        return res.status(201).json({
            "data": user,
            "accessToken": accessToken,
            "refreshToken": refreshToken,
        });
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: error.message,
        });
    }
}

export async function refreshToken(req, res) {
    try {
        const email = req.body.email
        const refreshToken = req.body.refresh_token

        if(!refreshToken || !email) {
            return res.status(400).json({
                status: 'error',
                message: 'invalid token'
            })
        }

        jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
            if(err){
                return res.status(403).json({
                    status: 'error',
                    message: err.message
                })
            }

            if(email != decoded.data.email){
                return res.status(400).json({
                    status: 'error',
                    message: 'email is not valid'
                });
            }

            const accessToken = jwt.sign({ data: decoded.data }, process.env.JWT_SECRET_ACCESS_TOKEN, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRED })

            return res.status(201).json({
                "accessToken": accessToken,
            });
        })

    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: error.message,
        });
    }
}