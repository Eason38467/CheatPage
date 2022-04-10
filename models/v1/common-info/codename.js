const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

moment.locale('zh-cn')

// Create Schema

const CodenameSchema = new Schema({
    cdname:{
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
module.exports = Codename = mongoose.model("codename", CodenameSchema);