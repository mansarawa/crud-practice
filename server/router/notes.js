import express from 'express';
import addnotecontroller from '../controller/addnotecontroller.js';
const router=express.Router();

router.post('/addnote',addnotecontroller)

export default router