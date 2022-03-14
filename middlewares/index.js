import expressJwt from 'express-jwt'

export const requireSignin = expressJwt({
    secret: process.env.JWTSECRET,
    algorithms: ["HS256"]
})