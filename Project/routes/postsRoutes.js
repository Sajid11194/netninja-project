const express = require("express");
const router = express.Router();

// Sending file to browser
router.get('/',(req,res) => 
{
    res.render("index",{title:"Index Page",admin:"Farhan Sajid",posts})
})

router.get('/about',(req,res) => 
{
    res.render("about",{title:"About Page",admin:"Farhan Sajid"})
})

router.get('/write',(req,res)=>
{
    res.render("write",{title:"Create Posts Page",admin:"Farhan Sajid"})
})

// redirect url
router.get('/about-me',(req,res) => 
{
    console.log("Url Path : ",req.url);
    res.redirect("/about");
})

module.exports = router;