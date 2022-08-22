const { Router } = require("express");
const router = Router();

// Controllers
const controller = require("../controllers/user");

router.get("/", controller.get);

module.exports = router;
