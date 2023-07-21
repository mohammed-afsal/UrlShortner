import express from "express"
import routes from "./routes/url.js"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
dotenv.config()
const app = express()

connectDb()







const port = process.env.PORT || 3000
app.listen(port,()=>{
	console.log("server started running")
})