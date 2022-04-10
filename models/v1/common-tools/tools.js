const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

moment.locale('zh-cn')

// Create Schema

const Tools = new Schema({
    toolname:{
        type:String,
        required:true
    },
    docs:{
        type:String,
        required:true
    },
    refdoc:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }
})

//创建模型
module.exports = Toolbox = mongoose.model("tools", Tools);