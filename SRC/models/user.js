import mongoose  from "mongoose";
//Aqui creamos los modelos de datos que utilizaremos
const userSchema = mongoose.Schema({
    dni:{
        type: Number,
        required:true
    },
    name: {
        type: String,
        required: true

    },
    age: {
        type: Number
       
    },
    gmail:{
        type:String,
        required:true
    }

});
export const schemaUser = mongoose.model("user", userSchema)
