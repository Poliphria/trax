const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const statesArray = require('../statesArray');


/**
 * The user schema is the model for how our users data will be structured.
 * We can always add to this if need be, just barebones it for now. 
 * 
 */
let userSchema = new Schema({
    email: {type: String, require: true},
    password: {type: String, required: true},
    admin: {
        isAdmin: {type: Boolean, required:true},
        adminOf: [
            {
                type: Schema.Types.ObjectId,
                ref: "Site"
            }
        ]
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    },
    favoriteStores: [
        {
            type: Schema.Types.ObjectId,
            ref: "Site"
        }
    ]
})

module.exports = mongoose.model("User", userSchema);