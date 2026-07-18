const router = express.Router() 

const Movies = require("../Controllers/movies")
const { verify, verifyAdmin } = require("../auth")

router.post("/") //Add movie

module.exports = router;