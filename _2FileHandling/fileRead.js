//Asyncronize file does not return anything

const { log } = require("console")
const fs=require("fs")

// let re=fs.readFileSync("./_2FileHandling/read.txt","utf-8")
// console.log(re);

fs.readFile("./_2FileHandling/read.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
})
