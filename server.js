var express	= require('express');
var app		= express();
var port	= process.env.PORT || 8080;
var db		= require('db');
var passport	= require('passport');
var flash	= require('connect-flash');

var morgan		= require('morgan');
var cookieParser 	= require(cookie-parser');
var bodyParser		= require('body-parser');
var session     	= require('express-session');
