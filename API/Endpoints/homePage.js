const blogModel = require('../models/blogModel')

//send list of all posts
const homePage = async (req, res) => {
  try{
    const posts = await blogModel.find().sort({ date: 'descending' })
    res.send(posts)
  }catch(e){
    console.log(e)
  }
}

module.exports = homePage