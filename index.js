const express = require("express")
const app = express()
PORT = 8080
app.use(express.json())
const router = express.Router()
app.use("/api", router)
router.get("/", (req,res) => {
	res.json({"msg":"hello world!!!"})
})




app.listen(PORT, () => {
	console.log("Server is up and running!!")
})