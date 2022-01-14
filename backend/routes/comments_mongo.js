let express = require('express')
let router = express.Router();
const db = require('../data/mongo')

router.get("/:id", async(req, res) => {
	const collection = db.collection('Comments');
	const id = req.params.id;
	const comments = await collection.find({Comment_ID: id}).sort({Creation_Date: -1}).toArray();
	res.send(comments);
});

router.post("/:id", async(req, res) => {
	const collection = db.collection('Comments');
	const id = req.params.id;
	const insertResult = await collection.insertMany([{ Comment_ID: id, Text: req.body.Text, Creation_Date: new Date()}]);
});

module.exports = router;
