import mongoose from 'mongoose';


// Should be created for each day within a certain 
// period of days and multiple ones on a single day
const TimeSlotSchema = new mongoose.Schema({
    class_id: {
        type: String,
        ref: 'Class',
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
});

export const TimeSlot = mongoose.model('TimeSlot', TimeSlotSchema);