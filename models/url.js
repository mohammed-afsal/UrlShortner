import mongoose from "mongoose"
import nanoid from "nanoid"
const urlSchema = new mongoose.Schema({
	long:{
		type:String,
		required:true
	},
	short:{
		type:String,
		required:true,
		default:nanoid
	}
})
export default mongoose.model("Url",urlSchema)