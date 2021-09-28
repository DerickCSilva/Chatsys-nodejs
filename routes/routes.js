let express = require("express");
let router = express.Router();
let IndexController = require("../controllers/IndexController");

router.get('/', IndexController.index);

module.exports = router;