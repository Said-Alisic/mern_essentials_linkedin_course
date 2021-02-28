import mongoose from 'mongoose';

// Connects individual students to 
// their respective booked classes
const BookingSchema = new mongoose.Schema(
    { 
        student_id: {
            type: String,
            ref: 'Student',
            required: true,
        },
        class_id: {
            type: String,
            ref: 'Class',
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        booking_date: {
            type: Date,
            default: Date.now,
        }
});

export const Booking = mongoose.model('Booking', BookingSchema);