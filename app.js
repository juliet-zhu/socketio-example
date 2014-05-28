var app = require('express')(),
	routers = require('./routers'),
	http = require('http'),
	path = require('path');

app.config(function(){
	app.set('port',process.env.PORT||3000);
	app.set('views',_dirname+'/views');
	app.set('view engine','ejs');
	app.use(express.faviicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(_dirname,"public")));
});

app.config('development',function(){
	app.use(express.errorHandler());
});

app.get('/',routers.index);

http.createServer(app).listen(app.get('port'),function(){
	console.log("Express server listening on port " + app.get('port'));
});