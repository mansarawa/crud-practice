import express from 'express'
import getimagecontroller from '../controller/getimagecontroller.js';

const getimage=express.Router();

getimage.post('/getprofile',getimagecontroller)

export default getimage