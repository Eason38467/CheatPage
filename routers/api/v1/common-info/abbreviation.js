 // @Codename related info

const express = require('express');
const router = express.Router();


const Abbreviation = require('../../../../models/v1/common-info/abbreviation');


// $route post 请求， api/abbreviation/addabb
//@desc  写入codename
//@access public

router.post("/addabb",(req,res)=>{
    //console.log(req.body);

    //判断数据中是否有
    Abbreviation.findOne({abb:req.body.abb})
        .then((abbreviation)=>{
            if(abbreviation){
                return res.status(400).json("该平台已经存在");
            }else {


                const platformField={};

                if(req.body.abb)platformField.abb=req.body.abb;
                if(req.body.desc)platformField.desc=req.body.desc;

                new Abbreviation(platformField).save().then(abbreviation=>{
                    res.json(abbreviation);
                });


            }
        })

});


// @route get 请求， api/abbreviation
//@desc  获取所有信息
//@access public

router.get('/',(req,res)=>{
    Abbreviation.find().then(abbreviation=>{
        if(!abbreviation){
            return res.status(404).json('没有任何内容');
        }
        res.json(abbreviation);
    }).catch(err=>res.status(404).json(err));

});

// @route get 请求， api/abbreviation/:_id
//@desc  获取所有信息
//@access public

router.get('/:_id',(req,res)=>{
    Abbreviation.findOne({abb:req.params._id}).then(abbreviation=>{
        if(!abbreviation){
            return res.status(404).json('没有任何内容');
        }
        res.json(abbreviation);
    }).catch(err=>res.status(404).json(err));

});



// $route post 请求， api/abbreviation/editabb
//@desc  编辑信息
//@access public

router.post("/editabb/:_id",(req,res)=>{
    //console.log(req.body);

    const platformField={};

    if(req.body.abb)platformField.abb=req.body.abb;
    if(req.body.desc)platformField.desc=req.body.desc;

    platformField.date=Date.now();
    console.log(platformField)
    Abbreviation.findOneAndUpdate(
        {_id:req.params._id},
        {$set:platformField},
        {new:true}
    ).then(abbreviation=>res.json(abbreviation))
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

// $route post 请求， api/codename/delcodename/:_id
//@desc  删除信息
//@access public
router.delete('/delabb/:_id',(req,res)=>{
    Abbreviation.findOneAndRemove({_id: req.params._id}).then(abbreviation=>res.json(abbreviation)
    ).catch(err=>res.status(404).json('删除失败'));
});
module.exports = router;
