let express = require('express')
let router = express.Router();
var db = require('../data/db')
router.get("/:id", (req, res) => {
	var id = [req.params.id]
	const sql = "SELECT * FROM Comments WHERE Idea_ID=?"
	var params = [req.params.id]
	db.all(sql, params, (err, rows) => {
		if (err) {
			return console.error(err.message);
		}
		let array = [];
		rows.forEach((row) => {
			array.push({Author : row.Author, Text : row.Text});
		});
		res.send(array);
	});
});

module.exports = router;
