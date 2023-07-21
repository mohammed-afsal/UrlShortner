import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import urlModel from "./models/url.js"


const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
connectDb()


app.get("/",async(req,res)=>{
	try{
		let urls = await urlModel.find()
		res.status(200).render("index",{urls:urls})
	}catch(e){
		console.error(e)
	}
})
app.post("/shorturl",async(req,res)=>{
	try{
		if(req.body.url != ""){
			const newUrl = new urlModel({
				long:req.body.url
			})
			await newUrl.save()
			res.status(200).redirect("/")
		}else{
			res.status(500).redirect("/")
		}
	}catch(e){
		console.error(e)
	}
})
app.get("/:id",async(req,res)=>{
	let url = await urlModel.findOneAndUpdate({short:req.params.id},{$inc:{clicks:1}})
	
	res.redirect(url.long)
})
const port = process.env.PORT || 3000
app.listen(port,()=>{
	console.log("server started running")
})