const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema({
    issue: {
        type: String,
        required: [true, 'Please add a issue']
    },

    tags: {
        type: [String]
    },

    machine_tags: {
        type: [String]
    },

    solutions: {
        type: [String]
    }
});

module.exports = mongoose.model('Solution', SolutionSchema);