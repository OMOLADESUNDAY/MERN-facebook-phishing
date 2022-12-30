const express=require("express")
const router=express.Router()
const {postInfo}=require('../controller/info.js')
router.post('/',postInfo)

module.exports={router}



