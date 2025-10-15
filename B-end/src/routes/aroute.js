import express from 'express';
const route = express.Router();


route.get('/signup', (req, res)=>{
    res.send(" signup endpoint");
});
route.get('/login', (req, res)=>{
    res.send(" login endpoint");
});
route.get('/logout', (req, res)=>{
    res.send("logout endpoint");
});

export default route;