//  const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import au from './routes/aroute.js'

const app = express()
dotenv.config();


const PORT = process.env.PORT || 5000


app.use('/api/auth',au);


app.listen(PORT, () => {
   console.log(`Server up! at ${PORT}`);
})