var db = require('../util/db');

//render html template of index view with searches data passed in
exports.home = function(req, res) {
	db.loadDatabase({}, function() {
		res.render('index', {searches: db.getCollection('searches').data});
	});
}

exports.top = function(req, res) {
	db.loadDatabase({}, function() {
		res.render('top', {terms: db.getCollection('top').data});
	});
}