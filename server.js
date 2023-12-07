const { error, log } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const router = require('./routes/routes');
require('dotenv').config();

const Model = require('./model/model')

const app = express();
app.use(express.json());
app.use('/api',routes);

//!Listning Port...{3000!}
const PORT = 3000;
const mongostring = process.env.DATABASE_URL



//! connecting string for mongo urls as user and passcode
mongoose.connect(mongostring);

const database = mongoose.connection

database.on('error',(error)=>{
    console.log(error);
})
database.once('connected',()=>{
    console.log("DB Connected sucessfully")
})


//! Endpoints: CRUD operations
//* For routing either use app.get/post/put/delete or use express.router


//! Postuser details

router.post('/post',async (req,res)=>{
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


router.get('/getAll', async (req,res)=>{
    try{
        const data = await Model.find();
        res.json(data);
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

router.patch('/update/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const newdata = req.body;
        const options= {new: true};
        const result= await Model.findByIdAndUpdate(
            id,newdata,options
        )
        res.send(result);     
    } catch (error) {
        res.send(400).json({message: error.message})
    }

    
})


router.delete('/del/:id',async(req,res)=>{
    try {
        const id= req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`document with ${data.name} has been deleted!`)        
    } catch (error) {
        res.status()
    }



})







app.listen(PORT,()=>{
    console.log(`Server ST at port ${PORT}`)
})

