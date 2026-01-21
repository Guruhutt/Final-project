const router = require("express").Router();
const {
  validateUserSignin,
  validateUserSignup,
} = require("../middleware/validation");
const { login, createUser } = require("../controllers/users");
const auth = require("../middleware/auth");
const userRouter = require("./users");

router.post("/signin", validateUserSignin, login);
router.post("/signup", validateUserSignup, createUser);

router.use("/users", auth, userRouter);

module.exports = router;
