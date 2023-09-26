const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const app = express();

app.use("/assets",express.static("assets"));

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "rahul@03",
    database: "nodejs"
});

pool.promise()
    .getConnection()
    .then((connection) => {
        console.log('Connected');
        // You can now use the 'connection' object to perform database operations
        // Don't forget to release the connection when you're done with it
        connection.release();
    })
    .catch((err) => {
        console.error('Error occurred:', err);
    });

    app.get("/",function(req,res){
        res.sendFile(__dirname + "/index.html");
    })

    app.post("/",encoder,function(req,res){
        var username = req.body.username;
        var password = req.body.password;
         pool.query("select * from userlogin where email = ? and pass = ?",[username,password],function(error,results,feilds){
            if (results.length > 0){
                res.redirect("/welcome");
            } else{
                res.redirect("/");
            }
            res.end();
        })
    })

    app.get("/welcome",function(req,res){
        res.sendFile(__dirname + "/welcome.html")
    })
    app.get("/min",function(req,res){
        res.sendFile(__dirname + "/min.html")
    })
    app.get("/legal",function(req,res){
        res.sendFile(__dirname + "/legal.html")
    })
    app.get("/contact",function(req,res){
        res.sendFile(__dirname + "/contact.html")
    })
    
    app.get("/calc",function(req,res){
        res.sendFile(__dirname + "/calc.html")
    })
    app.get("/price",function(req,res){
        res.sendFile(__dirname + "/price.html")
    })

    app.listen(5000,()=>{
        console.log('http://localhost:5000')
    });



