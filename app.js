var express=require('express')
var bodyparser=require("body-parser");
const app=express();
app.set("view engine","ejs");
app.set("views","./src/views");
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.render("home");
})
app.get("/newproduct",function(req,res){
    res.render("newproduct")
})
app.post("/addedproduct",function(req,res){
    res.render("addedproduct",{n1:req.body.nm,n2:req.body.nm1,n3:req.body.nm3})
})
var marray=[{pname:"l1",price:"44",quantity:"6"}]
app.get("/viewproduct",function(req,res){
    res.render("viewproduct",{m1:marray})
})
app.get("/removeproduct",function(req,res){
    res.render("removeproduct")
})

app.listen(8080,function(req,res){
    console.log("server loading..")
})