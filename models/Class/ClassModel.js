import mongoose from 'mongoose';



const ClassSchema = new mongoose.Schema({
    class_name: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    duration_minutes: {
        type: int,
        required: true,
    },
    max_students: {
        type: Number,
        required: true,
    },  
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

export const Class = mongoose.model('Class', ClassSchema);