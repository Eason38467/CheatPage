// @Codename related info

const express = require('express');
const router = express.Router();


const Codename = require('../../../../models/v1/common-info/codename');


// $route post 请求， api/codename/addcodename
//@desc  写入codename
//@access public

router.post("/addcodename",(req,res)=>{
    //console.log(req.body);

    //判断数据中是否有
    Codename.findOne({cdname:req.body.cdname})
        .then((codename)=>{
            if(codename){
                return res.status(400).json("该平台已经存在");
            }else {

                const platformField={};

                if(req.body.cdname)platformField.cdname=req.body.cdname;
                if(req.body.desc)platformField.desc=req.body.desc;

                new Codename(platformField).save().then(codename=>{
                    res.json(codename);
                });
            }
        })
});


// @route get 请求， api/codename
//@desc  获取所有信息
//@access public

router.get('/',(req,res)=>{
    Codename.find().then(codename=>{
        if(!codename){
            return res.status(404).json('没有任何内容');
        }
        res.json(codename);
    }).catch(err=>res.status(404).json(err));

});

// @route get 请求， api/codename/:codename
//@desc  获取所有信息
//@access public

router.get('/:cdname',(req,res)=>{
    Codename.findOne({cdname:req.params.cdname}).then(codename=>{
        if(!codename){
            return res.status(404).json('没有任何内容');
        }
        res.json(codename);
    }).catch(err=>res.status(404).json(err));

});



// $route post 请求， api/codename/editcodename
//@desc  编辑信息
//@access publics

router.post("/editcodename/:_id",(req,res)=>{
    //console.log(req.body);

    const platformField={};

    if(req.body.cdname)platformField.cdname=req.body.cdname;
    if(req.body.desc)platformField.desc=req.body.desc;

    platformField.date=Date.now();
    console.log(platformField)
    Codename.findOneAndUpdate(
        {_id:req.params._id},
        {$set:platformField},
        {new:true}
    ).then(codename=>res.json(codename))
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

// $route post 请求， api/codename/delcodename/:codename
//@desc  删除信息
//@access public
router.delete('/delcodename/:_id',(req,res)=>{
    Codename.findOneAndRemove({_id: req.params._id}).then(codename=>res.json(codename)
    ).catch(err=>res.status(404).json('删除失败'));
});
module.exports = router;
