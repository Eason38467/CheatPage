# 项目大纲
---
* 常用信息查询类
  * 平台信息查询
  * 常用ts命令查询
  * 特殊平台ts命令查询
  * 特殊命名查询
  * OID查询
* 常用工具类
  * easySNMP
  * ...
* Lab维护类
  * lab high level 信息查询
  * 机柜信息查询
  * 拓扑信息查询
  * lab 自动化部署测试平台

# 技术栈
---
## 前端
---
* vue
* html
* css
* javascript
  
## 后端
---
* node.js
* 
## 脚本
---
* python
* ansible
* ...

# 数据模型
---
## 平台信息
---
   pid:{
​        type:*String*,
​        required:true
​    },

​    family:{
​        type:*String*,
​        required:true
​    },

​    asicname:{
​        type:*String*,
​        required:true
​    },

​    codename:{
​        type:*String*,
​        required:true
​    },

​    desc:{
​        type:*String*,
​        required:true
​    },

​    troubleshoot:{
​        type:*Array*,
​        required:true
​    },

​    refdoc:{
​        type:*String*
​    },

​    date:{
​        type:*Date*,
​        default: *Date*.now
​    }

## 设备软件名

---

//软件内部名称

cdname:{
​        type:*String*,
​        required:true
​    },

//软件版本号公开的

​    desc:{
​        type:*String*,
​        required:true
​    },
​    date:{
​        type:*Date*,
​        default: *Date*.now
​    }

## 常用缩略词

---

// 缩略词

​    abb:{
​        type:*String*,
​        required:true
​    },

//此缩略词的描述

​    desc:{
​        type:*String*,
​        required:true
​    },

​    date:{
​        type:*Date*,
​        default: *Date*.now
​    }

## Checklist
---


//特定的keyword

​    keyword:{
​        type:*String*,
​        required:true
​    },

//此keyword对应的列表

​    checklist:{
​        type:*String*,
​        required:true
​    },

//平台信息

​    family:{
​        type:*String*,
​        required:true
​    },

//标记

​    tag:{
​        type:*String*,
​        required:true
​    },

​    date:{
​        type:*Date*,
​        default: *Date*.now
​    }
## 交换机模型
---

//ID

//设备名

//mgmt ip

//PID

//SN

//mgmt IP reachable （true/false）

//POD

//version

//RACK

//reserved ports 

//ports in used

//unregistered ports 


## IP地址
---

//IP address

//reserved(true/false)

//used by

//date

//VLAN

## OID

//OID
//描述

# API介绍
---

