import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userScheme = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter Email Address'],
        unique: true
    },
})

export default model('User', userScheme)