//Http Methods
//get : to get some some data from server 
//post - send data and mutate data in server
// const fs=require('fs')
// fs.writeFile("INfo about http requests","get = to some data from the server \n and we use post to send some data to muate in the server ",(err)=>{
//     if(!err){
//         console.log("Sucessfully Written!!!")
//     }
// })
const http = require("http");
// const { url } = require("inspector");

const myserver = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.end("You are ata home page");
            break
        case "/about":
            res.end("You are at /about page")
            break;
    }
    // res.end("Welcome, you are now connected to the server");
});

// Specify the port you want the server to listen on
const port = 3000;
myserver.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});