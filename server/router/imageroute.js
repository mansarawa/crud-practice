import express from 'express'
import { imagecontroller } from '../controller/imagecontroller.js';
const imagerouter=express.Router();

imagerouter.post('/profile',imagecontroller)

export default imagerouter