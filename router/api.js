import express from "express";
const router=express.Router();


import * as blogController from "../app/controllers/blogController.js"

// Create Route
router.post("/createBlog",blogController.createBlog);

// Read Route

router.get('/readBlog',blogController.readeBlog);

//Update Route 
router.put('/updateBlog',blogController.updateBlog);

//Delete Route

router.delete('/deleteBlog',blogController.deleteBlog)



export default router;