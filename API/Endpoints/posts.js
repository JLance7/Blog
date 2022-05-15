const express = require('express')
const { findByIdAndUpdate } = require('../models/blogModel')
const router = express.Router()
const blogModel = require('../models/blogModel')

//create post from given body and save in mongodb
router.post('/create', async (req, res) => {
  try{
    const newBlogPost = new blogModel({
      title: req.body.title,
      text: req.body.text,
      date: req.body.date
    })
    const result = await newBlogPost.save()
    res.send(result)

  }catch (e){
    console.log(e)
  }
})

//find post
router.get('/find/:id', async (req, res) => {
  try{
    const post = await blogModel.findById(req.params.id)
    res.send(post)
  }catch (e) {
    console.log(e)
  }
})

//update post
router.put('/edit/:id', async (req, res) => {
  try{
    const post = await blogModel.findByIdAndUpdate(req.params.id, 
      {
        title: req.body.title,
        text: req.body.text,
        date: Date.now()
      })
    res.send('updated post ' + req.params.id)  
  }catch (e){
    console.log(e)
  }
})

//delete post
router.delete('/delete/:id', async (req, res) => {
  try{
    const post = await blogModel.findByIdAndDelete(req.params.id)
    res.send('deleted post ' + req.params.id)
  }catch (e){
    console.log(e)
  }
})


module.exports = router