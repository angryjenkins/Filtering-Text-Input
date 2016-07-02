//requirements, por favor!
var express = require('express');
var app = express();
var hbs  = require('express-handlebars');
var path = require('path');
// var request = require('request');
// var cheerio = require('cheerio');
// var mongoose = require('mongoose')
var bodyParser = require('body-parser') // <-- Added body parser... this is why your ajax/api calls were not getting any data

var port = Number(process.env.PORT || 3333);


// BODY PARSER <-- Added Body Parser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//HANDLEBARS!
app.engine('hbs', hbs({extname:'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Database configuration
// // mongoose.connect('mongodb://localhost/mongoosescraper');
// mongoose.connect('mongodb://test:test@ds037814.mlab.com:37814/heroku_mp6vbrhl');
// var db = mongoose.connection;

// db.on('error', function(err) {
//   console.log('Mongoose Error: ', err);
// });
// db.once('open', function() {
//   console.log('Mongoose connection successful.');
// });


//the routes!

app.get('/', function(req, res){
	res.render('index',
		{
			"word1": "matthew",
			"word2": "martin",
			"word3": "rules"
		});
});




//static files.
app.use('/public',express.static('public'));

app.listen(port, function() {
  console.log('SCRAPER listening on port %s!', port);
});