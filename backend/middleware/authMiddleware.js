import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const authMiddleware = async (req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Separar la palabra Bearer del token, se guarda valor del token que está en [1]
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select(
                "-password -verified -token -__v"
            )

            next()
        } catch {
            const error = new Error('Token no válido')
            res.status(403).json({msg: error.message})
        }
    } else {
        const error = new Error('Token no válido o inexistente')
        res.status(403).json({msg: error.message})
    }

    // next()
}

export default authMiddleware