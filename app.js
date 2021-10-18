const express=require('express');
const app=express();
let items=["Buy food"];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/",(req,res)=>{
    let d = new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long",
        year: "numeric"
    };
    let tooday=d.toLocaleDateString("en", options);
    let currentday="";
    let newlistitem="";
    //  res.sendFile(__dirname + "/index.html"); 
    res.render('list', {currentday: tooday, newlistitem: items }); 
   });
   app.post("/",(req,res)=>{
      let item=req.body.newitem;
      items.push(item);
       res.redirect("/"); 
    // res.send(`${item}`);
    });
   app.listen(process.env.PORT||8080,()=>{
    console.log("server started on port 8080");
    });