// 익스프레스 기능 
const express = require("express");
// 익스프레스 함수 적용
const app = express();
// 포트 번호 변수
const port = 3000;
// ./routes/index.js 
const indexRouter = require("./routes/index");
// ./routes/user.js
const userRouter = require("./routes/user");
// 경로와 관련된 기능 
const path = require("path");

// 정적 파일 제공 설정 - expres1/public 지정
app.use(express.static(
	path.join(__dirname,'public')));

// route 분리
app.use("/", indexRouter);
app.use("/user", userRouter);

// express.json() 기능 사용
// app.use(express.json());
// express.urlencoded() : url 인코딩 
// app.use(express.urlencoded({extended:true}));

// localhost:3000 
// app.get("/", (req, res) => {
	// 응답을 hello express! 을 한다.
	// res.send('Hello, Express!');
// });


// 3000 포트로 들어오는 request 기다리겠다는 의미
app.listen(port, () => {
	// 실행 하면 아래 내용을 출력
	console.log(
	`Server is running at http://localhost:${port}`
	);
});

