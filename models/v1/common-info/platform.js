const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

moment.locale('zh-cn')

// Create Schema

const PlatformSchema = new Schema({
    pid:{
        type:String,
        required:true
    },
    family:{
        type:String,
        required:true
    },
    asicname:{
        type:String,
        required:true
    },
    codename:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    troubleshoot:{
        type:Array,
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
module.exports = Platform = mongoose.model("platform", PlatformSchema);