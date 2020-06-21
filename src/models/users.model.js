const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name"]
    },
    email: {
        type: String,
        required: [true, "Please tell us your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    role:{
        type: String,
        enum: ['Owner','Admin','Quality Analyst','Developer'],
        default: 'Developer'
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;