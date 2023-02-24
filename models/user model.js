const mongoose = require ("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'name must be required']
    },
       email:{
        type: String,
        trim: true,
        unique: true,
        validate: [validator.isEmail, "pls enter a valid email"],
        required: [true, 'email is required']
       },
        password:{
           type: String,
           trim: true,
           select: false,
           required: [true, 'must have a password']
       } 

})