const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    solutionTried: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add a solution']
    },

    userInfo: {
        type: [String],
        required: [true, 'Please add  user info']
    },

    dateAdded: {
        type: Date,
        default: Date.now
    },

    dateClosed: {
        type: Date
    }
});

module.exports = mongoose.model('Ticket', TicketSchema);