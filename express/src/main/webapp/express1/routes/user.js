const express = require("express");
const router = express.Router();
const path = require("path");

// app.js 이미 /user 보냈기 때문에 / 를 해야 처리 된다.
router.get("/", (req, res) => {
	// res.send("Is User Page ");
	res.sendFile(path.join(__dirname, 
		"../public/user.html"
	));
});

module.exports = router;