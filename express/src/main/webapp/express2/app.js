const express = require("express");
const app = express();
const port = 3000;
const indexRouter = require("./routes/index");
const path = require("path");
const aboutRouter = require("./routes/about");
const productRouter = require("./routes/product");

// View Engine 설정
app.set('view engine', 'ejs');
// View 폴더 지정
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(
		path.join(__dirname, 'public')));

app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/product", productRouter);

app.listen(port, () => {
	console.log(
	"Server is running at http://localhost:3000"
	);
});