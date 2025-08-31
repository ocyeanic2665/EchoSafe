const express=require("express");
const app= express();
const mongoose= require("mongoose");
const ejs=require("ejs");
const ejsMate=require("ejs-mate");
const path=require("path");


const MONGO_URL ="mongodb://127.0.0.1:27017/EchoSafe"

main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("web/index.ejs");
});

app.get("/guidelines",(req,res)=>{
    res.render("web/guidelines.ejs");
});

app.listen(8080,()=>{
    console.log("server is listening on port:8080")
});