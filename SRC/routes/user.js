import express from "express"
import {schemaUser} from "../models/user.js"

const router = express.Router() // creamos un enrutador, nos retorna un objeto que llamaremos router

//CREATE USER
router.post("/users", (req, res)=>{
    const user = schemaUser(req.body);
    user
    .save()
    .then((data)=>{res.json( data), console.log("create user")})
    .catch((error)=>res.json(error)) // creamos un usuario con los datos del esquema, los obtenemos del cuerpo de la peticion (req.body)
});

//get all user
router.get("/users", (req, res)=>{
    schemaUser
    .find()
    .then((data)=> res.json(data))
    .catch((error)=>res.json(error))
})

//get user
router.get("/users/:id", (req, res)=>{
    const {id} = req.params //extraemos el parametro id del objeto de la peticion
    schemaUser
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json(error))
})

//update a user
router.put("/users/:id",(req, res)=>{
    const {id} = req.params
    const {dni, name, age, gmail} = req.body
    schemaUser
    .updateOne({ _id: id },{ $set: {dni, name, age, gmail} }) //tenemos que pasarle dos objetos, objeto con los datos del usuario que encontrara y otro obj con los datos que colocara(objeto $SET)
    .then((data)=>res.json(data))
    .catch((error)=> res.json(error))
})

//Delete a user
router.delete("/users/:id",(req, res)=>{
    const {id} = req.params
    schemaUser
    .deleteOne({ _id: id }) //tenemos que pasarle un objeto, para que este tenga los parametros para la busqueda
    .then((data)=>res.json(data))
    .catch((error)=> res.json(error))
})


export const userRoutes = router

