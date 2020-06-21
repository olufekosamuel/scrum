const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const user = require('./User');

const scrumySchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
    status: {
        type: String,
        enum: ['Weekly','Today','Verified','Done'],
        default: 'Weekly',
    },
    task: {
        type: String,
        required: [true, 'Please tell us about the task']
    }
});

const Scrumy = mongoose.model('User', scrumySchema);

module.exports = Scrumy;