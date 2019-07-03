'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PTFUserSchema = new Schema({
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    middleName: {
        type: String,
        trim: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        unique: true
    },
    gender: String,
    age: Number,
    job: String,
    favorites: [String],
    avatar: String
});

var PTFUserModel = mongoose.model('ptf_User', PTFUserSchema);

module.exports = PTFUserModel;