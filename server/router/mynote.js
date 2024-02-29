import express from 'express'
import mynotecontroller from '../controller/mynotecontroller.js';
const mynote=express.Router();

mynote.post('/mynotes',mynotecontroller)
export default mynote