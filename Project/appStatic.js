const express = require("express");

const app = express();

app.listen(3000); // started server on port 3000

/*
//Sending Html
app.get('/',(req,res) => 
{
    console.log("Url Path : ",req.url);
    res.send("<h1>Test Express</h1>");
})
*/

// Sending file to browser
app.get('/',(req,res) => 
{
    console.log("Url Path : ",req.url);
    res.sendFile("./assets/index.html",{root: __dirname});
})

app.get('/about',(req,res) => 
{
    console.log("Url Path : ",req.url);
    res.sendFile("./assets/about.html",{root: __dirname});
})

// redirect url
app.get('/about-me',(req,res) => 
{
    console.log("Url Path : ",req.url);
    res.redirect("/about");
})

//middleware,
app.use((req,res)=>
{
    console.log("Url Path : ",req.url)
    res.status(404);
    res.sendFile("./assets/404.html",{root:__dirname})
})