const router = require("express").Router()

const Crisis = require("../models/crisis")

//create crisis

router.post("/", async (req,res)=>{
   const  newCrisis= new Crisis(req.body)
   try{

      const savedCrisis = await newCrisis.save()
      res.status(200).json(savedCrisis)

   }catch(err){
    res.status(500).json(err)

   }
})

//Get all crisis



 router.get("/",async(req,res)=>{

    try{
        
        const crisis = await Crisis.find()

        res.status(200).json(crisis)
    }catch(err){

         res.status(500).json(err)
    }
 })



module.exports= router