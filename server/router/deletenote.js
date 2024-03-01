import express from 'express'
import deletenotecontroller from '../controller/deletenotecontroller.js';

const deletenote=express.Router();

deletenote.delete('/delete',deletenotecontroller)
export default deletenote