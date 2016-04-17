var express = require('express');
var fortune = require('./lib/fortune.js');
var app = express();
app.use(express.static(__dirname + '/public'));
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

//404
app.get('/about', function(req, res){
	res.render('about', {fortune : fortune.getFortune()});
});

app.get('/', function(req, res) {
	res.render('home');
});

//404
app.use(function(req, res, next) {
	res.status(404);
	res.render('404');
});
//500
app.use(function(err, req, res, next) {
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('express started on port ' + app.get('port') + '; press Ctrl - c to terminate.');
});