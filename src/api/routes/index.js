const express = require('express');

const router = express.Router()

router.get("/", (req, res) => {
	res.send("The server is running successfully.");
});

module.exports = router