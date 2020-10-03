const express=require('express');
const app=express();
const bodyParser=require('body-parser');//bodyparse
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const MongoClient=require('mongodb').MongoClient;
let server=require('./server');//connecting server file for AWT
let config=require('./config');
let middleware=require('./middleware');


const url='mongodb://127.0.0.1:27017';
const dbName='hospitalInventory'; //connecting to mongodb
let db

MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
    if (err) return console.log(err);
    db=client.db(dbName);
    console.log(`Connected Mongodb: ${url}`);
    console.log(`Database: ${dbName}`);
})
 
app.get('/hospitaldetails',middleware.checkToken, function(req,res){
    console.log("Fetching data from Hospital collection");//hospital info
    var data=db.collection('hospital').find().toArray().then(result=>res.json(result));
});

app.get('/ventilatordetails',middleware.checkToken,(req,res)=>{
    console.log("Ventilator Information");//ventilator info
    var ventilatordetails=db.collection('ventilators').find().toArray().then(result=>res.json(result));
});

app.post('/searchventbystatus',middleware.checkToken,(req,res)=>{
    var status=req.body.Status;//by status searching ventilators
    console.log(status);
    var ventilatordetails=db.collection('ventilators').find({"status":Status}).toArray().then(result=>res.json(result));
});

app.post('/searchventbyname',middleware.checkToken,(req,res)=>{
    var name=req.query.Name;//by hospital name searching ventilators
    console.log(name);
    var ventilatordetails=db.collection('ventilators').find({'name':new RegExp(Name,'i')}).toArray().then(result=>res.json(result));
});

app.post('/searchhospital',middleware.checkToken,(req,res)=>{
    var name=req.query.Name;//search hospital by name
    console.log(name);
    var hospitaldetails=db.collection('hospital').find({'Name':new RegExp(name,'i')}).toArray().then(result=>res.json(result));
});

app.put('/updateventilator',middleware.checkToken,(req,res)=>{
    var ventid={vId:req.body.vId};//updating ventilator
    console.log(ventid);
    var newvalues={$set:{Status:req.body.Status}};
    db.collection("ventilators").updateOne(ventid,newvalues,function(err,result){
        res.json('1 document updated');
        if (err) throw err;
    });
});

app.post('/addventilatorbyuser',middleware.checkToken,(req,res)=>{
    var HId=req.body.hId;//adding ventilator by user
    var ventilatorId=req.body.vId;
    var status=req.body.Status;
    var name=req.body.Name;
    var item={
        hId:HId, ventilatorId:vId, status:Status, name:Name
    };
    db.collection('ventilators').insertOne(item,function(err,result){
        res.json('1 item inserted');
        //if (err) throw err;
    });
});

app.delete('/delete',middleware.checkToken,(req,res)=>{
    var myquery=req.query.vId;
    console.log(myquery);
    var myquery1={vId:myquery};
    db.collection('ventilators').deleteOne(myquery1,function(err,obj){
        if (err) throw err;
        res.json('1 document deleted');
    });
});
app.listen(1200);