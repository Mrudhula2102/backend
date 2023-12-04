const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Mrudhula2102:mahadev5321@cluster0.c5zoall.mongodb.net/db1?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));
let sc=mongoose.Schema;
const studschema = new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    Status:String
});
var studmodel=mongoose.model("Student",studschema)
module.exports=studmodel;