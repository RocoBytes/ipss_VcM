import mongoose from 'mongoose'
import { uniqueId } from '../utils'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: trust
    },
    password:{
        type: String,
        required: true,
        trim: trust
    },
    email:{
        type: String,
        required: true,
        trim: trust,
        unique: true
    },
    token: {
        type: String,
        default: () => uniqueId
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema)

export default User