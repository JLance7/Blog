import React from 'react'
import './style.css'
import superagent from 'superagent'
import Card from './card'
import { Link } from 'react-router-dom'


const Blog = () => {
  const [allPosts, setAllPosts] = React.useState([])

  const initialApiCall = async () => {
    try{
      const response = await superagent.get('http://localhost:3000')
      const json = JSON.parse(response.text)
      console.log(json)
      setAllPosts(json)
    }catch (e) {
      console.log(e)
    }
  }

  //runs when page is reloaded
  React.useEffect(() => {
    initialApiCall()
  }, [])


  const cards = allPosts.map((post, key) => {
    return (
      <Card json={post} key={key} />
    )
  })

  return(
    <div className='blog-container'>
      <div className='blog-canvas'>
        <div className='top'>
          <h2 className='posts-title'>Posts</h2>
          <Link to='/new' className='new-post'>
            <button href='/new' className='btn new-btn'>New Post</button>
          </Link>
        </div>
        {cards}
      </div>
    </div>
  )
}

export default Blog