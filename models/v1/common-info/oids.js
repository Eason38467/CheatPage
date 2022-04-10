const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

moment.locale('zh-cn')

// Create Schema

const OIDSchema = new Schema({
    oid:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

//创建模型
module.exports = OID = mongoose.model("OIDSchema", OIDSchema);