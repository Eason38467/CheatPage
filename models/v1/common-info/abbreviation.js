const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

moment.locale('zh-cn')

// Create Schema

const AbbSchema = new Schema({
    abb:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default: Date.now
    }
})

//创建模型
module.exports = Abbreviation = mongoose.model("abbreviation", AbbSchema);