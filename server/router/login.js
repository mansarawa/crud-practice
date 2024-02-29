import logincontroller from '../controller/logincontroller.js'
import express from 'express'
const login=express.Router();
login.post('/login',logincontroller)

export default login