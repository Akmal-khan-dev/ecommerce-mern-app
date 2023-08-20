const mongoose=require('mongoose')

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true, }).then((data)=>{
        console.log(`mongod connect with server at:${data.connection.host}`)
    }).catch((err)=>{
        console.log(`Error:${err.message}`)
    })
}
module.exports=connectDatabase;