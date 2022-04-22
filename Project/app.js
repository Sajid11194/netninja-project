const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dbURI= "mongodb+srv://sajid:sajid11194@fcc.f4fh4.mongodb.net/uniblog?retryWrites=true&w=majority"
const Posts = require("./models/posts.js");
const app = express();
// const postsRoutes = require("./routes/postsRoutes.js");
// initializing view engine
app.set('view engine','ejs');

/*
// started server on port 3000
app.listen(3000); 
*/


///////// section mongoose /////////
app.use(express.urlencoded({extended:true}));
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology: true})
    .then((result)=>app.listen(3000))
    .catch((err)=> console.log(err));


app.post("/new-post",(req,res)=>
{
    const post = new Posts(req.body);
    post.save().then((result)=> res.redirect("./show-posts")).catch((err)=> res.send(err));
})

// creates a static document in mongodb
/*
app.get("/new-post",(req,res)=>
{
    const post = new Posts({
        title: "Test Post",
        snippet : "Test Body"
    });
    post.save().then((result)=> res.send(result)).catch((err)=> res.send(err));
});
*/

app.get("/show-posts",(req,res)=>
{
    Posts.find().then((result)=> res.render("posts",{title:"All posts in db",admin:"Farhan Sajid",posts:result})).catch((err)=> res.send(err));
});

app.get("/show-posts/:id",(req,res)=>
{
    Posts.findById(req.params.id).then((result)=> res.render("full-post",{title: `${result.title}`,admin:"Farhan Sajid",post:result})).catch((err)=> res.send(err));
})

app.delete("/show-posts/:id",(req,res)=>
{
    console.log("Delete Request",req.params.id);
    Posts.findByIdAndDelete(req.params.id).then((result)=> res.json({redirect:'/show-posts'})).catch((err)=> res.send(err));
})

app.get("/get-post-by-id",(req,res)=>
{
    Posts.findById("6262aa43ae0c91f52bf2a9b8").then((result)=> res.send(result)).catch((err)=> res.send(err));
});

///////////// ------ end mongoose -------- //////////////








const posts = [
    {
        title: "Title 1",
        post : "Post 1"
    },
    {
        title: "Title 2",
        post : "Post 2"
    },
    {
        title: "Title 3",
        post : "Post 3"
    }
]

/*
// morgan logger
app.use(morgan('dev'));
*/

/*
//making all files available for public view from  root level
app.use(express.static('assets'))
*/

// passing to next middleware
app.use((req,res,next)=>
{
    console.log("URL : ", req.url);
    next();
})

//blog routes started
//app.use(postsRoutes);
app.get('/',(req,res) => 
{
    res.render("index",{title:"Index Page",admin:"Farhan Sajid",posts})
})

app.get('/about',(req,res) => 
{
    res.render("about",{title:"About Page",admin:"Farhan Sajid"})
})

app.get('/write',(req,res)=>
{
    res.render("write",{title:"Create Posts Page",admin:"Farhan Sajid"})
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