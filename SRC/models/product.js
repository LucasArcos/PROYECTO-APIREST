import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }

});

export const schemaProduct = mongoose.model("Product", productSchema)

