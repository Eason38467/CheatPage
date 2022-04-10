const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

moment.locale('zh-cn')

// Create Schema
//GCL = General Checklists
const GclSchema = new Schema({
    keyword:{
        type:String,
        required:true

    },
    checklist:{
        type:String,
        required:true

    },
    family:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default: Date.now
    }
})

//创建模型
module.exports = GeneralChecklists = mongoose.model("generalChecklists", GclSchema);