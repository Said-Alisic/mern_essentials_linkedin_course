import mongoose from 'mongoose';


const TeacherSchema = new mongoose.Schema({
    display_name: {
        type: String,
        required: true,
    }, 
    first_name: {
        type: String,
        required: true,
    }, 
    last_name: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    }, 
    phone_number: {
        type: String,
        required: true,
    }, 
    address: {
        type: String,
        default: true,
    }, 
    teacher_info: {
        type: String,
        default: false,
    }, 
    date_joined: {
        type: Date,
        default: Date.now,
    },
    last_active: {
        type: Date,
        required: false,
    },
    access_level: {
        type: String,
        default: 'Teacher',
    }
});

export const Teacher = mongoose.model('Teacher', TeacherSchema);