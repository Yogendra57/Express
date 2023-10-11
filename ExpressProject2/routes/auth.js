const express=require('express');
const dataSchema =require('../models/dataSchema');
const router = express.Router();

router.get('/api/appointment',async (req,res)=>{
    console.log(req.body);
    const data = new dataSchema(req.body);
    await data.save();
    res.send(req.body)
})
module.exports=router