import { Schema, model } from 'mongoose'

let collection = 'users'
let schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: false },
    location: { type: String, required: false },
    role: { type: Number, default: 0 },
    online: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    verify_code: { type: String }
},{
    timestamps: true
})

let User = model( collection, schema )
export default User
