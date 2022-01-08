let express = require('express')
let router = express.Router();
var db = require('../data/db')

router.get("/:id", (req, res) => {
	const id = [req.params.id];
	const sql = db.prepare("SELECT * FROM Comments WHERE Idea_ID=? ORDER BY Creation_Date DESC");
	const rows = sql.all(id);
	let array = [];
	rows.forEach((row) => {
		array.push({Comment_ID: row.Comment_ID, Text : row.Text, Creation_Date: row.Creation_Date});
	});
	res.send(array);
});

router.post("/:id", (req, res) => {
	const id = req.params.id;
	const sql = db.prepare("INSERT INTO Comments (Idea_ID, Text, Creation_Date) VALUES (?, ?, strftime('%s', CURRENT_TIMESTAMP) + 0)");
	sql.run(id, req.body.Text);
});

module.exports = router;
