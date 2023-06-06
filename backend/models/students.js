const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    studentname:{
        type:String,
        required : true,
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required : true,
        Unique:true,
    },
    mobilenumber:{
        type: Number,
        required : true,
    },
},
{
    timestamps:true,
});

const Students= mongoose.model("Students",studentSchema);
module.exports = Students;