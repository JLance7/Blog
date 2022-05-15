import React from 'react'
import './style.css'
import superagent from 'superagent'
import { Link } from 'react-router-dom'

const Card = props => {
  const deletePost = async () => {
    try{
      let answer = window.confirm('Are you sure you want to delete post: ' + props.json.title + '?')
      if (answer){
        const id = props.json._id
        const deletedPost = await superagent.delete(`http://localhost:3000/posts/delete/${id}`)
        window.location.reload()
      }
      
    } catch (e){
      console.log(e)
    }
  }

  const getFormattedDate = dateStr => {
    const date = new Date(dateStr)
    return date.toLocaleDateString()
  }

  return (
    <div className='card' key={props.json.id}>
      <div className='card-container'>
        <div className='card-top'>
          <div>
          <h2 style={{ marginBottom: '15px' }}>{props.json.title}</h2>
          <h4 style={{ marginBottom: '25px' }}>{ getFormattedDate(props.json.date) }</h4>
          </div>
          <div>
            <Link to={'/edit/' + props.json._id}>
              <button className='btn edit-btn'>Edit</button>
            </Link>  
            <button onClick={deletePost}  className='btn delete-btn'>Delete</button>
          </div>
        </div>
        <div>
          <pre>{props.json.text}</pre>
        </div>
      </div>

    </div>
  )
}



export default Card