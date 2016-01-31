var express	= require('express');
var app		= express();
var port	= process.env.PORT || 8080;
var db		= require('./config/db');
var mysqlModel  = require('mysql-model');
var passport	= require('./config/passport');
var flash	= require('connect-flash');

var morgan		= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser		= require('body-parser');
var session     	= require('express-session');

 app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser.json()); 
        app.use(bodyParser.urlencoded({ extended: true }));

    app.set('view engine', 'jade'); // set up jade for templating

    // required for passport
	require('./config/passport')(passport)
    app.use(session({ secret: 'imbibixessongdjafalo' }));
    app.use(passport.initialize());
    app.use(passport.session()); 
    app.use(flash()); 
	// routes
	require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

	// launch 

    	app.listen(port);
	console.log('The magic happens on port ' + port);
