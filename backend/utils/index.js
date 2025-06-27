import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

function validateObjectId(id, res){
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message: "El id no es válido"});
    }
}

function handleNotFoundError(message, res){
    const error = new Error(message);
    return res.status(404).json({
        msg: error.message
    });
        
}

const uniqueId = () => Date.now().toString(32) + Math.random().toString(32).substring(32)

const generateJWT = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
    return token
}

export {
    validateObjectId,
    handleNotFoundError,
    uniqueId,
    generateJWT
}
    

