const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statesArray = require('../statesArray');

const sitesSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    }
})

module.exports = mongoose.model('Sites', sitesSchema);