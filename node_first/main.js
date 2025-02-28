// 웹 기능 변수
let http = require("http");
// 파일 시스템 기능 변수
let fs = require("fs");

// http.createServer : 웹 서버 생성
// function(request, response) : request - 요청, resposne - 응답
let app = http.createServer(function(request, response){
	
	// request.url : 클라이언트가 요청한 주소
	let url = request.url;
	
	if(request.url == "/") {
		url = "/index.html";
	}
	if(request.url == "/favicon.ico"){
		return response.writeHead(404);
	}
	response.writeHead(200);
	// fs.readFileSync(__dirname + url)
	// __dirname : 현재 디렉터리 경로
	// 현재 경로의 html 파일로 응답
	response.end(fs.readFileSync(__dirname + url));
});
// app.listen(3000) : 3000 포트 번호로 접속
app.listen(3000);

