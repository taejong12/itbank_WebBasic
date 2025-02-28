let http = require("http");
let url = require("url");

let app = http.createServer(function(request, response) {
	let _url = request.url;
	let queryData = url.parse(_url,true).query;

	console.log(queryData);
	
	response.writeHead(200);
	// response.end('test');
	response.end(`id : ${queryData.id}, pwd : ${queryData.pwd}`);
});
app.listen(3000);