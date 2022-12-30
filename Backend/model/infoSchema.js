const mongoose=require('mongoose')

const infoSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username required'],
        trim:true        
    },
    password:{
        type:String,
        required:[true,"password required"],
        trim:true
    }
})

module.exports=mongoose.model('facebookInfo',infoSchema)