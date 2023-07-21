import mongoose from "mongoose"

const connectDb = ()=>{
	mongoose.connect(process.env.DB_URL,{
		useNewUrlParser:true,
		useUnifiedTopology:true
	})
	const db = mongoose.connection
	db.on("error",(err)=>{
		console.error(err)
	})
	db.once("open",()=>{
		console.log("database connected successfully ")
	})
}
export default connectDb