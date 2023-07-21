import express from "express"
import routes from "./routes/url.js"

const app = express()
const port = process.env.PORT || 3000
app.listen(port,()=>{
	console.log("server started running")
})