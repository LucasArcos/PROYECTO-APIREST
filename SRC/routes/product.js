import express from "express"
import { schemaProduct} from "../models/product.js"
const router = express.Router()

router.post("/product", (req, res)=>{
    const product = schemaProduct(req.body)
    product
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json(error))
})

router.get("/product", (req, res)=>{
    schemaProduct
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))
})



router.get("/product/:name",(req, res)=>{
    const name = req.params.name
    schemaProduct
    .find({name: name})
    .then((data)=>res.json(data))
    .catch((error)=>res.json(error))
})

router.put("/product/:id", (req, res)=>{
    const id = req.params.id
    const {name, price, quantity} = req.body
    schemaProduct
    .updateOne({ _id: id }, { $set: {name, price, quantity}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json(error))
})

router.delete("/product/:id", (req, res)=>{
    const id = req.params.id
    schemaProduct
    .deleteOne({_id: id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json(error))
})


export const productRoutes = router