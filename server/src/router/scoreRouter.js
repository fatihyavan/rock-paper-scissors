const router = require("express").Router();
const scoreController = require("../controller/scoreController");

router.post('/createscore',scoreController.createScore);
router.get('/getscore',scoreController.getScore);
router.post('/updatescore',scoreController.updateScore);

module.exports = router;