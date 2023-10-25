const mongoose=require('mongoose');

require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnfiedTopology:true    })
        .then(()=>{
            console.log("successfull");
        })
        .catch((error)=>{
            console.log("catch an error",error);
            error.exit(1);
        })

}

module.exports=dbConnect;
