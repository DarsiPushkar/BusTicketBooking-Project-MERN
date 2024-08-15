const express=require("express")
const app=express()
const fs=require("fs")
const path=require("path")
const cors=require("cors")

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pushkardarsi965:pushkar1234@cluster0.pd6jnnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());
app.listen(3008,()=>{
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

    app.get("/",(req,res)=>{
     
       
// Create a MongoClient with a MongoClientOptions object to set the Stable API version


const ConnectServer=async()=>{

    const res = await client.connect()
    if(res){
        console.log("connected")
    }
    else{
        console.log("error")
    }
}

ConnectServer()

async function run() {
  
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    const database=client.db("Busticket");
    
       
  
}


run().catch(console.dir) 
    })

app.get("/signup",(req,res)=>{
  const signup=async()=>{
    await client.connect();
    await client.db("admin").command({ ping: 1});
    const database=client.db("Busticket")
    const collections=database.collection("userdetails");

    const details=await collections.insertOne(req.query)
    if(details){
      const output={status:"success",data:details}
      res.send(output)
      console.log(req.query)
    }
  }
  signup()
})

app.get("/login",(req,res)=>{
  const Login=async()=>{
    await client.connect();
    await client.db("admin").command({ ping: 1});
    const database=client.db("Busticket");
    const collections=database.collection("userdetails");


  }
})


    
app.get("/login1",(req,res)=>{

const Login=async()=>{
await client.connect();
await client.db("admin").command({ ping: 1});
const database = client.db("Busticket");
const result = await database.collection("users").find({name:"pushkar"}).toArray()

if(result){

  const  output ={status:"success",data:result}
 res.send(output);
}

}
Login()

})

    
})


   
