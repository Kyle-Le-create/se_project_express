const router = require("express").Router();
const { validateCardBody, validateId } = require("../middlewares/validation");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  deleteLike,
} = require("../controllers/clothingItems");

const auth = require("../middlewares/auth");

router.get("/", getItems);

router.use(auth);
router.post("/", validateCardBody, createItem);
router.put("/:itemId/likes", validateId, likeItem);
router.delete("/:itemId/likes", validateId, deleteLike);
router.delete("/:itemId", validateId, deleteItem);
module.exports = router;
