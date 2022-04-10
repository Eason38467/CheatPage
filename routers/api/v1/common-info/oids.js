 // @Codename related info

const express = require('express');
const router = express.Router();


const OID = require('../../../../models/v1/common-info/oids');


// $route post 请求， api/oid/addoid
//@desc  写入codename
//@access public

router.post("/addoid",(req,res)=>{
    //console.log(req.body);

    //判断数据中是否有
    OID.findOne({oid:req.body.oid})
        .then((oid)=>{
            if(oid){
                return res.status(400).json("该平台已经存在");
            }else {


                const platformField={};

                if(req.body.oid)platformField.oid=req.body.oid;
                if(req.body.desc)platformField.desc=req.body.desc;
                if(req.body.tags)platformField.tags=req.body.tags;


                new OID(platformField).save().then(oid=>{
                    res.json(oid);
                });


            }
        })

});


// @route get 请求， api/oid
//@desc  获取所有信息
//@access public

router.get('/',(req,res)=>{
    OID.find().then(oid=>{
        if(!oid){
            return res.status(404).json('没有任何内容');
        }
        res.json(oid);
    }).catch(err=>res.status(404).json(err));

});

// @route get 请求， api/oid/:_id
//@desc  获取所有信息
//@access public

router.get('/:_id',(req,res)=>{
    OID.findOne({abb:req.params._id}).then(oid=>{
        if(!oid){
            return res.status(404).json('没有任何内容');
        }
        res.json(oid);
    }).catch(err=>res.status(404).json(err));

});



// $route post 请求， api/oid/editoid
//@desc  编辑信息
//@access public

router.post("/editoid/:_id",(req,res)=>{
    //console.log(req.body);

    const platformField={};

    if(req.body.oid)platformField.oid=req.body.oid;
    if(req.body.desc)platformField.desc=req.body.desc;
    if(req.body.tags)platformField.tags=req.body.tags;


    platformField.date=Date.now();
    console.log(platformField)
    OID.findOneAndUpdate(
        {_id:req.params._id},
        {$set:platformField},
        {new:true}
    ).then(oid=>res.json(oid))
});




// $route post 请求， api/oid/deloid/:_id
//@desc  删除信息
//@access public
router.delete('/deloid/:_id',(req,res)=>{
    OID.findOneAndRemove({_id: req.params._id}).then(oid=>res.json(oid)
    ).catch(err=>res.status(404).json('删除失败'));
});
module.exports = router;
