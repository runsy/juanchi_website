let express = require('express')
let router = express.Router();
var db = require('../data/db')

router.get("/:id", (req, res) => {
	var id = [req.params.id];
	const sql = "SELECT * FROM Comments WHERE Idea_ID=? ORDER BY Creation_Date DESC";
	var params = [req.params.id];
	db.all(sql, params, (err, rows) => {
		if (err) {
			return console.error(err.message);
		}
		let array = [];
		rows.forEach((row) => {
			array.push({Comment_ID: row.Comment_ID, Text : row.Text, Creation_Date: row.Creation_Date});
		});
		res.send(array);
	});
});

router.post("/:id", (req, res) => {
  const id = req.params.id;
  const comment = [id, req.body.Text];
  const sql = "INSERT INTO Comments (Idea_ID, Text, Creation_Date) VALUES (?, ?, strftime('%s', CURRENT_TIMESTAMP) + 0)";
  db.run(sql, comment, err => {
    // if (err) ...
  });
});

module.exports = router;
