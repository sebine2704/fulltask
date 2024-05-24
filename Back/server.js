const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
dotenv.config()
const{Schema}=mongoose
const foundationSchema = new Schema({
   img: { 
    type: String,
    require:true},
   title: { 
    type: String, 
    require:true },
   text: { 
    type: String,
    require:true },
  });
  const Foundation = mongoose.model('Foundation', foundationSchema);
  app.get("/foundation", async(req,res)=>{
    const getfoundation=await Foundation.find({})
    res.status(200).send(getfoundation)
  } )
  app.post("/foundation",async(req,res)=>{
    const{img,title,text}=req.body
    const postfoundation= new Foundation({
        img,
        title,
        text
    })
    await postfoundation.save()
    res.status(201).send(postfoundation)
  })
  app.delete("/foundation/:id",async(req,res)=>{
    const {id}=req.params
    const deletefoundation= await Foundation.findByIdAndDelete(id)
    res.status(200).send(deletefoundation)
  })
  app.get("/foundation/:id",async(req,res)=>{
    const{id}=req.params
    const getbyid=await Foundation.findById(id)
    res.status(200).send(getbyid)

  })
  app.put("/foundation/:id",async(req,res)=>{
    const{img,title,text}=req.body
    const {id}=req.params
    const putfoundation= await Foundation.findByIdAndUpdate(id,{
        img,
        title,
        text
    })
    res.status(201).send(putfoundation)
  })

const PORT=process.env.PORT
const DB=process.env.DB_URL
mongoose.connect(DB)
  .then(() => console.log('Connected!'));
  app.listen(PORT,console.log("Port is active",PORT))