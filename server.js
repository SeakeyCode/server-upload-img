const express=require('express');
const multer=require('multer');
const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parser');
var cors = require('cors')

let server=express();
server.listen(8080);
server.use(cors())
let multerObj=multer({dest: './upload/'});
server.use(multerObj.any());  //muti-part

server.use(bodyParser.urlencoded({extended: false})); //urlencoded

server.post('/upload', (req, res, next)=>{
  console.log(req.files, req.body)
  let i=0;

  __next();
  function __next(){
    let newName=req.files[i].path+path.extname(req.files[i].originalname)

    fs.rename(req.files[i].path, newName, err=>{
      if(err){
        console.log(err);

        res.sendStatus(500, 'rename error');
        res.end();
      }else{
        i++;

        if(i>=req.files.length){
          res.send('upload ok');
          res.end();
        }else{
          __next();
        }
      }
    });
  }
});
