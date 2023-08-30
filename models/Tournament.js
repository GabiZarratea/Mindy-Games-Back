import { Schema, model } from 'mongoose'

let collection = 'tournaments'
let schema = new Schema({
    name_tournament: { type: String, default: "Free tournament" },
    name_game: { type: String, required: true },
    date_init: { type: Date, required: true },
    date_finish: { type: Date },
    schedule: { type: String, required: false },
    cost: { type: Number, required: false, default: 0 },
    awards: { type: String, required: false, default: 'Not yet defined' },
    platform: { type: String, required: true, default: 'Not yet defined' }
},{
    timestamps: true
})

let Tournament = model( collection, schema )
export default Tournament
