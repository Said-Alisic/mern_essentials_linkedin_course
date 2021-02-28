import mongoose from 'mongoose';

// Connects individual teachers to 
// their respective hosted classes
const ClassTeacherSchema = new mongoose.Schema(
    { 
        teacher_id: {
            type: String,
            ref: 'Teacher',
            required: true,
        },
        class_id: {
            type: String,
            ref: 'Class',
            required: true,
        },
});

export const ClassTeacher = mongoose.model('ClassTeacher', ClassTeacherSchema);