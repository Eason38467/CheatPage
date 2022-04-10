// @platform related info

const express = require('express');
const router = express.Router();


const Platform = require('../../../../models/v1/common-info/platform');


// $route post 请求， api/platforms/addplatform
//@desc  写入平台数据
//@access public

router.post("/addplatform",(req,res)=>{
    //console.log(req.body);

    //判断数据中是否有
    Platform.findOne({pid:req.body.pid})
        .then((platform)=>{
            if(platform){
                return res.status(400).json("该平台已经存在");
            }else {


                const platformField={};

                if(req.body.pid)platformField.pid=req.body.pid;
                if(req.body.codename)platformField.codename=req.body.codename;
                if(req.body.asicname)platformField.asicname=req.body.asicname;
                if(req.body.desc)platformField.desc=req.body.desc;
                if(req.body.troubleshoot)platformField.troubleshoot=req.body.troubleshoot;
                if(req.body.refdoc)platformField.refdoc=req.body.refdoc;
                if(req.body.family)platformField.family=req.body.family;
                new Platform(platformField).save().then(platform=>{
                    res.json(platform);
                });


            }
        })



});


// @route get 请求， api/platforms
//@desc  获取所有信息
//@access public

router.get('/',(req,res)=>{
    Platform.find().then(platform=>{
        if(!platform){
            return res.status(404).json('没有任何内容');
        }
        res.json(platform);
    }).catch(err=>res.status(404).json(err));

});

// @route get 请求， api/platforms/:id
//@desc  获取所有信息
//@access public

router.get('/:id',(req,res)=>{
    Platform.findOne({_id:req.params.id}).then(platform=>{
        if(!platform){
            return res.status(404).json('没有任何内容');
        }
        res.json(platform);
    }).catch(err=>res.status(404).json(err));

});



// $route post 请求， api/platforms/editplatform
//@desc  编辑信息
//@access public

router.post("/editplatform/:pid",(req,res)=>{
    //console.log(req.body);

    const platformField={};

    if(req.body.pid)platformField.pid=req.body.pid;
    if(req.body.codename)platformField.codename=req.body.codename;
    if(req.body.asicname)platformField.asicname=req.body.asicname;
    if(req.body.desc)platformField.desc=req.body.desc;
    if(req.body.description)platformField.description=req.body.description;
    if(req.body.troubleshoot)platformField.troubleshoot=req.body.troubleshoot;
    if(req.body.refdoc)platformField.refdoc=req.body.refdoc;
    if(req.body.family)platformField.family=req.body.family;
    platformField.date=Date.now();
    console.log(platformField)
    Platform.findOneAndUpdate(
        {pid:req.params.pid},
        {$set:platformField},
        {new:true}
    ).then(platform=>res.json(platform))
});



// $route post 请求， api/platforms/editplatform
//@desc  pilianggengxin编辑信息
//@access public

// router.post("/editmanyplatform/:pid",(req,res)=>{
//     //console.log(req.body);
//
//     const platformField={};
//
//
//     if(req.body.troubleshoot)platformField.troubleshoot=req.body.troubleshoot;
//     if(req.body.refdoc)platformField.refdoc=req.body.refdoc;
//     platformField.date=Date.now();
//
//     Platform.findOneAndUpdate(
//         {pid:req.params.pid},
//         {$set:platformField},
//         {new:true}
//     ).then(platform=>res.json(platform))
// });

// $route post 请求， api/platforms/delplatform/:id
//@desc  删除信息
//@access public
router.delete('/delplatform/:pid',(req,res)=>{
    Platform.findOneAndRemove({pid: req.params.pid}).then(platform=>res.json(platform)
    ).catch(err=>res.status(404).json('删除失败'));
});
module.exports = router;