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

const uniqueId = () => Date.now().toString(32) + Math.random().toString(32).substring(32)

export {
    validateObjectId,
    handleNotFoundError,
    uniqueId
}
    

