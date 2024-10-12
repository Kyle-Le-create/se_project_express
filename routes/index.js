const router = require("express").Router();
const userRouter = require("./users");
const { NotFound } = require("../errors/NotFound");

const clothingItemRouter = require("./clothingItems");

router.use("/users", userRouter);
router.use("/items", clothingItemRouter);

router.use(() => {
  throw new NotFound("Route not found");
});

module.exports = router;
