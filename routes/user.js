const router = express.Router();

const userController = require("../controllers/user");
const { verify, verifyAdmin } = require("../auth")

router.post("/register", userController, registerUser)

router.post("/login")

router.get("details")

router.patch("/:id/set-as-admin")

router.patch("/:id/remove-as-admin")

router.patch("/change-username")

router.patch("/change-password")

module.exports = router;