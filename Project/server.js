const http = require('http');
const fs=require('fs'); // importing file system so we can return with html
const _=require('lodash');

/*
//returning html from server
const server = http.createServer((req,res) =>{
console.log(req.url,req.method);
res.setHeader('Content-Type','text/html');
res.write("<html><head><link rel='stylesheet' href='#'></head>")
res.write("<h1>Test</h1></html>");
res.end();
});

*/

const server = http.createServer((req,res) =>{
    // console.log(req.url,req.method);

    //lodash section

    const num= _.random(0,100)
  //  console.log(num)

    //
    res.setHeader('Content-Type','text/html');
    let path = "./assets/";
    switch(req.url)
    {
        case "/":
            path+='index.html';
            console.log("Trigger index page")
            res.statusCode=200;
            break;
        case '/about':
            path+="about.html";
            res.statusCode=200;
            console.log("Trigger about page")
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader("Location","/about")
            console.log("Trigger about page")
            res.end()
            break;
        default:
            path+="404.html";
            res.statusCode=404;
            break;
    }
    fs.readFile(path,(err,data)=>
    {
        if (err)
        {
            console.log("Error happened",path)
            res.end()
        }
        else
        {
            console.log("Written data to the page")
            res.end(data)
        }
    })
    });

// started listenning on port 3000
server.listen(3000,'localhost',()=>
console.log("Server Started"));


