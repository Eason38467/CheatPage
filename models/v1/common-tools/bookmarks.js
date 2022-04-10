const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

moment.locale('zh-cn')

// Create Schema

const Bookmarks = new Schema({
    linkname:{
        type:String,
        required:true
    },
    docs:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

//创建模型
module.exports = Bookmark = mongoose.model("bookmarks", Bookmarks);