/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Troller Schema
 */
var TrollerSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    score: {
        type: Number,
        default: 0
    }
});

/**
 * Validations
 */
TrollerSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');


mongoose.model('Troller', TrollerSchema);