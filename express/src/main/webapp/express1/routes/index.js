const express = require("express");
const router = express.Router();

// localhost:3000 실행
router.get("/", (req, res) => {
	// res.send("Welcome to Express");
	res.sendFile(path.join(__dirname,
		"../public/index.html"));
});

// localhost:3000/user 실행
/*
router.get("/user", (req,res) => {
	res.send("User Page!");
});
*/

module.exports = router;