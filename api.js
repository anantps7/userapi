const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(5000,()=>{
    console.log("server is listening ");
})

client.connect();

app.get('/emp',(req,res)=>{
    client.query(`select * from emp`, (err,result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
