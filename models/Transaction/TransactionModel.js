import mongoose from 'mongoose';

// Used for ticket purchase transaction tracking
const TransactionSchema = new mongoose.Schema({
    student_id: {
        type: String,
        ref: 'Student',
        required: true,
    },
    card_type: {
        type: String,
        required: true,
    },
    card_holder: {
        type: String,
        required: true,
    },
    card_number: {
        type: String,
        required: true,
    },
    transaction_date: {
        type: Date,
        default: Date.now,
    },
    transaction_info: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
});

export const Transaction = mongoose.model('Transaction', TransactionSchema);