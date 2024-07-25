//Working with node and npm
const fs = require('node:fs');
// console.log(fs)
fs.appendFile("Hey.txt","Hello this a file",(err)=>{
    console.log(err)
})
let fun=(val)=>{
    console.log(val)
}
fun(3)
const m=require("./maths")
console.log(m)