function start(){
    var express=require("express"),
    path =require("path"),
    app=express(),
    url= require("url"),
    cors = require('cors'),
    bodyParser = require('body-parser');
    const querystring = require('querystring');
    app.use(express.static(path.join(__dirname,'../public')));    // here drop your public folders & files like i.e- images, js, html etc.
    app.use(bodyParser.urlencoded({ extended: false }));
    model=require('./model/model.js');                               // model file path
    require('./router/router.js')(express,app,url,model,querystring);   // router file path
    app.set('port',process.env.PORT ||4000 ); // Port Start
    var server= require('http').createServer(app);
    server.listen(app.get('port'),function(){
    console.log('server start on port '+ app.get('port') );         // print on console
	                });
}exports.start = start;

