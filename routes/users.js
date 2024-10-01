const router = require("express").Router();

const { getUsers, updateUser } = require("../controllers/users");

router.get("/me", getUser);
router.patch("/me", updateUser);

module.exports = router;
