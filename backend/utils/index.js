import mongoose from "mongoose";

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

export {
    validateObjectId,
    handleNotFoundError}