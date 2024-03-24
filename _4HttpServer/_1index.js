const http=require("http"); // build in module -> 'http'
const fs=require("fs")

// const myServer=http.createServer((req,res)=>{    ; // createServer() will built web server
//     console.log(req.headers);  //Terminal wala
//     res.end("Hello end")              //Website wala
// })

const express=require("express")
const app=express()

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.method} : ${req.url} New Req received \n`
    fs.appendFile("./_4HttpServer/log.txt",log,(err,data)=>{
        switch(req.url){
            case '/' : res.end("Home Page")
            break;

            case '/about' : res.end("About page")
            break;

            case '/contact' : res.end("Contact page")
            break

            default: res.end("404");
        }
        
    })
    
})

myServer.listen(8000,()=>console.log("Server started"))   // inform in terminal that website server started

