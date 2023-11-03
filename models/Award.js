import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const awardScheme = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['vouchers', 'products', 'giftcards'],
        required: true,
    },
    point: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
})

export default model('Award', awardScheme)
