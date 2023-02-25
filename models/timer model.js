const mongoose = require("mongoose");
const validator = require("validator");
    const timerSchema = new mongoose.Schema({

        selectDate:{
            type: String,
            trim: true,
            required: [true, ''],
        },

        sleepTime:{
            type: String,
            trim: true,
            required: true,
        },

        wakeupTime:{
            type: String,
            trim: true,
            required: true, 
        },

        totalTimeDuration:{
            type: String,
            trim: true,
            required: true, 
        },
    },
{timestamps:true}

    );
    const Timer = ("Timer", timerSchema)
    module.exports = Timer;