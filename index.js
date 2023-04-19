// require expressjs
const express = require("express")
const app = express()
PORT = 8080
app.use(express.json())
// use router to bundle all routes to /api
const router = express.Router()
app.use("/", router)
// get on root route (/api)
router.get("/", (req,res) => {
	res.json({"msg":"hello wooooorld!!!"})
})
// start server
app.listen(PORT, () => {
	console.log("Server is up and running!!")
})
