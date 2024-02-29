import express from 'express'
import signupcontroller from '../controller/signupcontroller.js';
const signup=express.Router();

signup.post('/signup',signupcontroller)

export default signup