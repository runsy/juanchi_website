let express = require('express')
let router = express.Router();

function load_log(req, res, id){
	var fs = require('fs');
	var file_path = "logs/" + id + ".md";
	if(!fs.existsSync(file_path)) {
		file_path  = "logs/main.md";
	}
	fs.readFile(file_path, "utf8", function(err, data){
		if(err == null) {
			res.send(data);
		} else if(err.code === 'ENOENT') {
		// file does not exist
		} else {
			throw err;
		}
	});
}

router.get("/:id", function(req, res) {
	let id = req.params['id'];
	if (typeof id === 'undefined'){
		id = "main";
	}
	load_log(req, res, id)
});

module.exports = router;
