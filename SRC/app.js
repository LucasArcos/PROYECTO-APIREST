import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import {userRoutes} from "./routes/user.js"
import { productRoutes } from "./routes/product.js"
dotenv.config()

const port = process.env.port || 3000
            
const app = express()


app.listen(port, ()=>{
    console.log("el servidor esta escuchando en el puerto http://localhost:" + port)
})
//MIDDLEWARE
app.use(express.json())
app.use("/api", userRoutes);
app.use("/api", productRoutes )



//ROUTES
app.get("/", (req, res)=>{
    
    res.send("WELCOME TO MY API")
})

//MONGO DB CONNECTION 
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("CONNECTION SUCCESSFULLY")) //NECESITA URI:string, es una especie de key que nuestra app tendra para obtener acceso a la DB
    .catch((error)=> console.log(error));