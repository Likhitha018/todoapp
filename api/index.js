var Express=require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://likhitha:12345@cluster0.cwf8gfs.mongodb.net/?retryWrites=true&w=majority";













var DATABASENAME="todoappdb";
var database;


app.listen(5000,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    });
})
app.get('/api/todoapp/GetTasks',(request,response)=>{
    database.collection("todoappcollection").find({}).toArray((error,result)=>{
        response.send(result);
    });
})

app.post('/api/todoapp/AddTasks',multer().none(),(request,response)=>{
   database.collection("todoappcollection").count({},function(error,numOfDocs){
    database.collection("todoappcollection").insertOne({
        id:(numOfDocs+1).toString(),
        description:request.body.newTasks
    });
    response.json("Added Succesfully");
   })
})
