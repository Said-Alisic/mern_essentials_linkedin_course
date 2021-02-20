import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Like this we pass a schema of an object to our database
export const FigureSkaterSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    couch: {
        type: String,
    },
    category: {
        type: String
    },
    speed: {
        type: Number,
        enum: [1, 2, 3]
    },
    strength: {
        type: Number,
        enum: [1, 2, 3]
    },
    endurance: {
        type: Number,
        enum: [1, 2, 3]
    },
    ability: {
        type: Number,
        enum: [1, 2, 3]
    },
    technique: {
        type: Number,
        enum: [1, 2, 3]
    },
    tactical: {
        type: Number,
        enum: [1, 2, 3]
    },
    createdDate: {
        type: Date,
        default: Date.now // use todays date and time as default
    }


})





