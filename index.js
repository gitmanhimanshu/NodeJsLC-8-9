const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
 fs.readdir('./files',(err,files)=>{
  res.render('index',{files})
 })
});
app.post("/create",(req,res)=>{
  const filename=req.body.title.split(' ').join('')+'.txt'
  console.log(filename)
fs.writeFile(`./files/${filename}`,req.body.textwrite,(err)=>{
  res.redirect('/');
})
})
app.listen(3000, (req, res) => {
  console.log("running");
});
