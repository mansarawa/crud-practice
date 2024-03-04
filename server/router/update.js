import express from 'express'
import updataController from '../controller/updatecontroller.js';

const updatenote=express.Router();

updatenote.put('/update',updataController)

export default updatenote