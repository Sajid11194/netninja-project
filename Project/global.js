//console.log(global)

//runs only one time
setTimeout(()=>{
    console.log("Test Timeout")
},3000)
/*
//keep running until clearInterval(interval)
const interval=setInterval(()=>{
    console.log("Test Interval")
},1000)
*/
console.log(__dirname,__filename)