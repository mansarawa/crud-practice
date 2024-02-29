import  express  from "express";
import cors from 'cors';
import ConnectToDb from "./config/dbConfig.js";
import router from "./router/notes.js";
import signup from "./router/signup.js";
import login from "./router/login.js";
import mynote from "./router/mynote.js";
const app=express();
app.use(express.json())
app.use(cors());
app.use('/',router)
app.use('/',signup)
app.use('/',mynote)
app.use('/',login)
await ConnectToDb();
app.listen(4000,()=>{
    console.log("Start")
})