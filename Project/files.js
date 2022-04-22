const fs = require('fs');
fs.writeFile('./files/log.txt',"Test",()=>
        {
            console.log("Successfully Written");
        })

fs.readFile("./files/log.txt",(err,data)=>{
    if (err)
    {
        console.log(err)
    }
    console.log(data);
    });

// if folder does not exists then create,if exists then delete
if(!fs.existsSync("./assets"))
{
fs.mkdir("./assets",(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Folder created")
})
}

else
{
    fs.rmdir("./assets",(err)=>{
        console.log("Removed Folder")
    })
}

// if file exists then delete ,if dpes not exists then create
if(fs.existsSync("./files/log.txt"))
{
fs.unlink("./files/log.txt",(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("FIle Deleted")
})
}
else
{
    fs.writeFile('./files/log.txt',"Test",()=>
        {
            console.log("Successfully Written");
        })

}

const readstream=fs.createReadStream("./files/rs.txt",{ encoding : 'utf8'})

readstream.on('data',(chunk)=>
{
    console.log("-----------------Chunk Received-----------------")
    console.log(chunk)
})