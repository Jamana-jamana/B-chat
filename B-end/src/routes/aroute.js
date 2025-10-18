import express from 'express';
import { signup } from '../Controllers/Controller.js';
const route = express.Router();


route.post('/signup',signup);
route.get('/login', );
route.get('/logout',);

export default route;