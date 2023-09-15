import { Schema, model, Types } from 'mongoose'

let collection = 'gamers'
let schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    chooseGame: { type: String, required: false,},
    id_chooseGame: { type: Types.ObjectId, ref: 'tournaments', default: () => new Types.ObjectId() },
    chooseDate: { type: String, required: false },
    acceptTerms: { type: Boolean, required: true },
},{
    timestamps: true
})

let Gamer = model( collection, schema )
export default Gamer
