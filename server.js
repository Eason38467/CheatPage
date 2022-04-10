const express = require('express');
const mongoose = require('mongoose')  //导入数据库插件
const bodyParser = require('body-parser'); // 导入body-parser

const app = express();

//引入路由 platform
const Platform = require("./routers/api/v1/common-info/platforms");
const Codename = require("./routers/api/v1/common-info/codename");
const Abbreviation = require("./routers/api/v1/common-info/abbreviation");
const GeneralChecklists = require("./routers/api/v1/common-info/gchecklists");
const OID = require("./routers/api/v1/common-info/oids");


//DB config
const db = require('./config/keys').mongoURI;

//使用body-parser 中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log(req)
    console.log(res)
    next()
})

// connect to db

mongoose.connect(db)
    .then(()=> console.log("MongoDB Connected"))
    .catch(err => console.log(err) )

//使用routes

app.use("/api/platforms",Platform);
app.use("/api/codename",Codename);
app.use("/api/abbreviation",Abbreviation);
app.use("/api/gchecklists",GeneralChecklists);
app.use("/api/oid",OID);


//main server
const port = 5002;

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})