const router = require("express").Router();
const scoreController = require("../controller/scoreController");

router.post('/createscore',scoreController.createScore);
router.post('/getscore',scoreController.getScore);
router.post('/updatescore',scoreController.updateScore);
router.get('/getallscore',scoreController.getAllScore);

module.exports = router;