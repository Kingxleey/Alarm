const mongoose = require ("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema ({
    name:{
        type: String,
        trim: true,
        required: [true, 'name must be required'],
    },
       email:{
        type: String,
        trim: true,
        unique: true,
        validate: [validator.isEmail, "pls enter a valid email"],
        required: [true, 'email is required'],
       },

        password:{
           type: String,
           trim: true,
           select: false,
           minLength: [8, 'password must not be less than eight letter'],
           required: [true, 'must have a password'],
           validate: {
            validator: function (val) {
                return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[A-Za-z\d]{8,}/.test(val);
            },
            message:
              "Password must contain at least a number, a lowercase and an uppercase alphabeth",
          },
        },
    
        passwordConfirm: {
            type: String,
            required: [true, "A user must have an passwordConfirm"],
            validate: {
              validator: function (val) {
                return val === this.password;
              },
              message: "Password and confirm password are different",
            },
            select: false,
          },


role:{
    type:String,
    default: "user",
    enum: ["user", "admin"]
},









});



const Timer = mongoose.model("Timer", timerSchema)
module.exports = Timer;