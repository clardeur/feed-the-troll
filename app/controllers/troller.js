/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Article = mongoose.model('Troller'),
    _ = require('underscore');


/**
 * +1 troll
 */
exports.troll = function(req, res) {
    var troller = req.troller;

    if (troller) {
        console.log("+1 troll on '" + troller.name + "'");
        res.send(200);
    }
};

/**
 * List of trollers
 */
exports.all = function(req, res) {
    Article.find().sort('-score').exec(function(err, trollers) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(trollers);
        }
    });
};
