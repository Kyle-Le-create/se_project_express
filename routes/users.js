const router = require("express").Router();
const auth = require("../middlewares/auth");

const { getUser, updateUser } = require("../controllers/users");

router.get("/me", auth, getUser);
router.patch("/me", updateUser);

module.exports = router;
