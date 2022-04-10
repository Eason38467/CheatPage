// @General Checklists related info

const express = require('express');
const router = express.Router();


const GeneralChecklists = require('../../../../models/v1/common-info/gchecklist');


// $route post 请求， api/gcheklists/addgcl
//@desc  写入codename
//@access public

router.post("/addgcl",(req,res)=>{
    console.log(req.body);

    //判断数据中是否有



                const platformField={};

                if(req.body.checklist)platformField.checklist=req.body.checklist;
                if(req.body.keyword)platformField.keyword=req.body.keyword;
                if(req.body.family)platformField.family=req.body.family;
                if(req.body.tag)platformField.tag=req.body.tag;

                new GeneralChecklists(platformField).save().then(codename=>{
                    res.json(codename);
                });

});


// @route get 请求， api/gcheklists
//@desc  获取所有信息
//@access public

router.get('/',(req,res)=>{
    GeneralChecklists.find().then(codename=>{
        if(!codename){
            return res.status(404).json('没有任何内容');
        }
        res.json(codename);
    }).catch(err=>res.status(404).json(err));

});

// // @route get 请求， api/codename/:codename
// //@desc  获取所有信息
// //@access public
//
router.get('/:keyword:family',(req,res)=>{
    GeneralChecklists.findOne({keyword:req.params.keyword}).then(codename=>{
        if(!codename){
            return res.status(404).json('没有任何内容');
        }
        res.json(codename);
    }).catch(err=>res.status(404).json(err));

});



// $route post 请求， api/gcheklists/editgcl
// @desc  编辑信息
// @access public

router.post("/editgcl/:tag",(req,res)=>{
    console.log(req.body);

    const platformField={};

    if(req.body.checklist)platformField.checklist=req.body.checklist;
    if(req.body.keyword)platformField.keyword=req.body.keyword;
    if(req.body.family)platformField.family=req.body.family;
    if(req.body.tag)platformField.tag=req.body.tag;

    platformField.date=Date.now();
    console.log(platformField)
    GeneralChecklists.findOneAndUpdate(
        {$and:[{tag:req.body.tag},{family:req.body.family}]},
        {$set:platformField},
        {new:true}
    ).then(codename=>res.json(codename))
});
//
//
//
// // $route post 请求， api/platforms/editplatform
// //@desc  pilianggengxin编辑信息
// //@access public
//
// // router.post("/editmanyplatform/:pid",(req,res)=>{
// //     //console.log(req.body);
// //
// //     const platformField={};
// //
// //
// //     if(req.body.troubleshoot)platformField.troubleshoot=req.body.troubleshoot;
// //     if(req.body.refdoc)platformField.refdoc=req.body.refdoc;
// //     platformField.date=Date.now();
// //
// //     Platform.findOneAndUpdate(
// //         {pid:req.params.pid},
// //         {$set:platformField},
// //         {new:true}
// //     ).then(platform=>res.json(platform))
// // });
//
// // $route post 请求， api/gchecklists/delgcl/:codename
// //@desc  删除信息
// //@access public
router.delete('/delgcl',(req,res)=>{

    GeneralChecklists.findOneAndDelete({$and:[{tag:req.body.tag},{family:req.body.family}]}).then(codename=>res.json(codename)
    ).catch(err=>res.status(404).json('删除失败'));
});
module.exports = router;