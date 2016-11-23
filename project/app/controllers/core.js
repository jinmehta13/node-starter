var db = require('../util/db');

//render html template of index view with searches data passed in
exports.home = function(req, res) {
	db.loadDatabase((), function() {
		res.render('index', {searches: db.getCollection('searches').data});
	});
}