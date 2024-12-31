const express = require('express');
const app = express();
const path = require('path');

// form data is handle backend
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// public images or static files are use
app.use(express.static(path.join(__dirname,'public')));
// ejs pages are render 
app.set('view-engine','ejs');

app.get("/",function(req,res){
    res.render("index.ejs");
})

// dynamic rounting (:)  
// app.get("/profie/:username",function(req,res){
//     res.render("index.ejs"); 
// })

app.listen(3000,function(){
    console.log("it's running");
})