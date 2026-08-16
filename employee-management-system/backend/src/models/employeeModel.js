const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone : {
        type : String,
        required : true,
        trim : true,
        match: /^\d{10}$/
    },
    salary : {
        type : Number,
        required : true,
        min : 0.01
    },
    designation: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    joiningDate : {
        type : Date,
        required : true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Employee",employeeSchema);