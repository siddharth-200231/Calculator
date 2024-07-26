const http=require('http')
const fs=require('fs')
// const result=fs.writeFileSync("Request_logs.txt","The logs are \n")
const server=http.createServer((req,res)=>{
fs.appendFile("Request_log.txt",`The request was made on ${Date.now()} \n`,(err)=>{
   if (!err)  console.log("A new Log was added")
    console.log(req.url)
})
res.end("Hello from server")
// console.log(req.headers)

})
server.listen(8000,()=>{
    console.log(`server running on port: ${8000}`)
})