const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const statesArray = require('../statesArray');
const saltRounds = 10;


/**
 * The user schema is the model for how our users data will be structured.
 * We can always add to this if need be, just barebones it for now. 
 * 
 */
let userSchema = new Schema({
    email: {type: String, require: true},
    password: {type: String, required: true},
    address: {
        street: {type: String},
        city: {type: String},
        enum: statesArray,
        zip: {type: String},
    },
    favoriteStores: [
        
    ]
})