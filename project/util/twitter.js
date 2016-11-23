var twitter = require('twitter');

var client = new twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.COMSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACESS_TOKEN_SECRET

})

module.exports = client;