'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PTFAccountSchema = new Schema({
    user_id: Object,
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    role: Number

});

var PTFAccountModel = mongoose.model('ptf_Account', PTFAccountSchema);

module.exports = PTFAccountModel;