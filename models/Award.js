import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const awardScheme = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['vouchers', 'products', 'giftcard'],
        required: true,
    },
    point: {
        type: Number,
        required: true,
    },
})

export default model('Award', awardScheme)
