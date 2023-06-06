const express = require('express');
const app = express();

app.use(express.json());

const Students = require('../models/students')

app.post('/students/signup', async(req, res) => {
    const {studentname, password,email, mobilenumber} = req.body;
    if (!studentname || !email || !password || !mobilenumber) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const students = new Students({
      studentname,email,password,mobilenumber});
    try{
    await students.save();
    res.send(students);
    }catch(error){
    res.status(400).send(error);
    }
  });


  app.post('/students/login', async (req, res) => {
    const { studentname, password } = req.body;
  
    try {
    
      const students = await Students.findOne({ studentname });
  
      if (!students) {
        // students not found
        return res.status(401).json({ error: 'students not found' });
      }
      // Compare the stored password with the provided password
      if (students.password != password) {
        // Password mismatch
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Authentication successful
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      // Handle database errors
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get("/students",async(req,res)=>{
    const students = await Students.find({});
    try{
        res.send(students);
    }catch(error){
        res.status(500).send(error);
    }
  });

app.put('/students/:id',async(req,res)=>{
    const {id}=req.params;
    const{name,department,email}=req.body;
    try{
        const students = await Students.findByIdAndUpdate(id,{studentname,email,password,mobilenumber},{new:true});
        res.json(students);
    }catch(error){
        res.status(500).json({error:'Error updating Studentss'})
    }
});


app.delete('/Studentss/:id',async(req,res)=>{
    const {id}=req.params;
    try{
        const students = await Students.findByIdAndDelete(id);
        res.json(students);
    }catch(error){
        res.status(500).json({error:'Error deletiing Studentss'})
    }
});
  
  module.exports = app;