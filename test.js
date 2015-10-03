var http = require('http');
var url = require('url');
var fs = require('fs');
//
/*
var mongodb = require('mongodb');
var mongoserver = new mongodb.Server("0.0.0.0",27017,{});
function(){
	new mongodb.Db('mongotest',mongoserver,{}).open(function(error,client){
		if(error) throw error;
		val collection = new mongodb.Collection(client,'R3Transaction');
		collection.find(function(error,cursor){
			cursor.each(function(error,doc){
				if(doc){
					console.log("name:"+doc.name+)
				}
			});
		});
	});
}
*/

http.createServer(function(req, res) {
	fs.readFile("./test.html","binary",function(err,file){
		res.writeHead(200, {'Content-Type':'text/html'});
		//var pathname = url.parse(req.url).pathname;
		res.write(file,"binary");
		res.end();
	});
}).listen(1337, '0.0.0.0');
console.log('run');
