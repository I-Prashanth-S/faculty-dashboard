const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql');
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const url = require('url');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

const s3 = new aws.S3({
 aws_access_key_id: 'ASIAV3K2QLFHSL2Z6JEE',
 secretAccessKey: 'rXmBfwJrQ/BM5pEcirf7NfDjDcsvKYjL6wvYSSVH',
 dir: 'imgs',
 sessionToken:'FwoGZXIvYXdzEEoaDNo684Bp2IZO1p9qnSLWAUHbdSPhlzzEfGhSenlYPfZjHEa3AA6WPjMlmRgfPlaHnicRCarmf7NH1FOdjq66Qz+n62z6EcIYVuw5yISJ2m/FKM/ssPVBCtspo2ciFJfMgeRFV9ESbj+wLpMyd+RAIrk3+6t+TfmumnfeyhuYZ9xctEfRcJyFbMdJEfYjqpHoFlX7ftjfiRsaiOEM+wc8vpdQZ43BcA426k8SgCXvkFA9qMj+l9M9p9tvdP2Mumgxl+ZKO2EHd5PdhVUiRJJGXsLH/zchSpRPo67cHX2j4KoUr5v9Xlgolc618gUyLZfOnB8LIRPDZzKZSeb26sZVSvgeFLBNqndhnQqJqzqmDcYEa8Wsm7xE98iztQ==',
 Bucket: 'seschedule'
});

var con = mysql.createConnection({
  host: "database-1.czuepjtqzk8i.us-east-1.rds.amazonaws.com",
  user:"admin",
  password:"hitman2606",
  database: "users"
});

con.connect((err) => {
  if(!err)
  console.log('Connection succeeded');
  else
  console.log('Unsuccessful \n Error : '+JSON.stringify(err,undefined,2));
});

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sefacultydashboard@gmail.com',
    pass: 'faculty@dashboard'
  }
});

app.post('/login',(req,res)=>{
  var {id, password} = req.body;
  console.log(id);
  console.log(password);
  con.query("select * from users where id=? and password=?", [id,password], function (err, result, fields) {
    if (err) console.log(err.sqlMessage);
    const abc={
      res:result,
      error:err
    }
    res.json(JSON.stringify(abc));
  });
});

app.post('/register',(req,res)=>{
  var {id, name, dept, email, password} = req.body;
  console.log(id);
  console.log(name);
  console.log(dept);
  console.log(email);
  console.log(password);
  con.query("select * from users where id=?", [id], function (err, result, fields) {
    if(err) console.log(err.sqlMessage);
    if(result.length>0){
      const abc={
        res:result,
        error: err
      }
      res.json(JSON.stringify(abc));
      console.log(JSON.stringify(abc));
    }
    else{

      con.query("insert into users values (?,?,?,?,?)", [id,name,dept,email,password], function (err, result, fields) {
        if (err) console.log(err.sqlMessage);
        const abc={
          res:result,
          error:err
        }
        res.json(JSON.stringify(abc));
        console.log(JSON.stringify(abc));
      });

    }
  });

});

app.post('/fp',(req,res)=>{
  var {id} = req.body;
  console.log(id);

  con.query("select password, email from users where id=?", [id], function (err, result, fields) {
    console.log(result);
    if (err) console.log(err.sqlMessage);
    else if(result.length == 0){
      console.log('Account does not exist!');
      res.json(JSON.stringify({res: 0}));
    }
    else{
      var results = result[0].password;
      var mailid = result[0].email;

      var mailOptions = {
      from: 'sefacultydashboard@gmail.com',
      to: mailid,
      subject: 'Password Reset',
      html: 'Your password is : <b>' + results + ' </b>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

      const abc={
        res:result,
        error:err
      }
      
      res.json(JSON.stringify({res: 1}));
    }
    });
});











const profileImgUpload = multer({
 storage: multerS3({
  s3: s3,
  bucket: 'seschedule',
  key: function (req, file, cb) {
   cb(null, path.basename( file.originalname, path.extname( file.originalname ) )  )//+ '-' + Date.now() + path.extname( file.originalname )
  }
 }),
 limits:{ fileSize: 2000000 }
}).single('profileImage');


app.post('/img',(req,res)=>{
profileImgUpload( req, res, ( error ) => {
  if( error ){
   console.log( 'errors', error );
   res.json( { error: error } );
  } else {
   // If File not found
   if( req.file === undefined ){
    console.log( 'Error: No File Selected!' );
    res.json( 'Error: No File Selected' );
   } else {
    // If Success
    const imageName = req.file.key;
    const imageLocation = req.file.location;
// Save the file name into database into profile model
    res.json( {
     image: imageName,
     location: imageLocation
    } );
   }
  }
 });
});









app.post('/leavelog',(req,res)=>{
    var id = req.body.username;
    var isHOD = req.body.isHOD;
    var query;
    if(isHOD)
        query = "select * from leavelog L,users U,department D where L.appliedby=U.id and U.dept=D.dept and D.id='"+id+"';";
    else
        query = "select * from leavelog where appliedby = '"+id+"';";
    console.log(query);
    con.query(query, function(err, result, fields) {
        // console.log(fields);
        var table = {
            columns: fields,
            entries: result
        }
        res.json(JSON.stringify(table));
    })
})

app.post('/approvedecline',(req,res)=>{
    var id = req.body.username;
    var query = "select * from leavelog L,users U,department D where L.appliedby=U.id and U.dept=D.dept and D.id='"+id+"' and L.status='Pending';";
    console.log(query);
    con.query(query, function(err, result, fields) {
        // console.log(fields);
        var table = {
            columns: fields,
            entries: result
        }
        res.json(JSON.stringify(table));
    })
})

app.post('/approve',(req,res)=>{
    var id = req.body.leaveid;
    var query = "UPDATE leavelog SET status = 'Approved' WHERE leaveid = '"+id+"';";
    console.log(query);
    con.query(query, function(err, result, fields) {
        var table = {
            dummy: true
        }
        res.json(JSON.stringify(table));
    })
})

app.post('/decline',(req,res)=>{
    var id = req.body.leaveid;
    var query = "UPDATE leavelog SET status = 'Declined' WHERE leaveid = '"+id+"';";
    console.log(query);
    con.query(query, function(err, result, fields) {
        var table = {
            dummy: true
        }
        res.json(JSON.stringify(table));
    })
})

// async function genid()
// {
//     var newLeaveID = 0;
//     var query = "select MAX(leaveid) from leavelog;";
// con.query(query, function(err, result, fields) {
//         if(result.length!=0)
//         {
//             res = JSON.parse(JSON.stringify(result[0]));
//             console.log(res['MAX(leaveid)']);
//             newLeaveID = res['MAX(leaveid)'];
            
//         }
//         newLeaveID++;
//         console.log(newLeaveID);
//         return newLeaveID;
//     })
    
// }

app.post('/apply',(req,res)=>{
    // var x = genid().then(function(res){console.log(res)})
    // console.log(x)
    console.log(req.body);
    var query = "insert into leavelog(appliedby,request_type,startfrom,ends_on,reason,status) values('"+req.body.appliedby+"','"+req.body.leaveType+"','"+req.body.startDate+"','"+req.body.endDate+"','"+req.body.reason+"','Pending');";
    console.log(query);
    con.query(query, function(err, result, fields) {
        if(err) {console.log(err);}
        // console.log(result.affecctedRows);
        var table = {
            dummy: true
        }
        res.json(JSON.stringify(table));
    })
})

app.post('/verify',(req,res)=>{
    var id = req.body.username;
    var query = "select * from department where id = '"+id+"';";
    console.log(query);
    con.query(query, function(err, result, fields) {
        var table = {
            isHOD: false
        }
        console.log(result);
        if(result.length != 0)
            table.isHOD = true;
        console.log(table);
        res.json(JSON.stringify(table));
    })
})












app.listen(process.env.PORT || 5000,()=>{
  console.log("Port 5000");
})