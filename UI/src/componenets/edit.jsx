import { React, useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import superagent from 'superagent'
import './style.css'
import Navbar from './navbar'



const Edit = props => {
  let params = useParams()
  let id = params.id
  const [title, setTitle] = useState('')
  const [originalTitle, setOriginalTitle] = useState('')
  const [text, setText] = useState('')
  const navigate = useNavigate()
  

  const getPostDate = async () => {
    try{
      let response = await superagent.get(`http://localhost:3000/posts/find/${id}`)
      console.log(response)
      setOriginalTitle(response.body.title)
      setTitle(response.body.title)
      setText(response.body.text)
    }catch (e){
      console.log(e)
    }
  }

  useEffect(()=>{
    getPostDate()
  }, [])



  const handleTitle = event => {
    setTitle(event.target.value)
  }

  const handleText = event => {
    setText(event.target.value)
  }

  const saveData = async event => {
    
    try{
      if (props.action == 'edit'){
        const response = await superagent.put(`http://localhost:3000/posts/edit/${id}`)
                            .set('Content-Type', 'application/json')
                            .send({ title: title, text: text, date: Date.now() })
      } else if (props.action == 'new'){
        const response = await superagent.post(`http://localhost:3000/posts/create`)
                            .set('Content-Type', 'application/json')
                            .send({ title: title, text: text, date: Date.now() })
      }
      
      navigate('/')
  
    } catch (e){
      console.log('error' + e)
    }   
   
  }


  return (
    <>
      <Navbar />
      <div className='blog-container'>
        <div className='form-edit'>
          { props.action == 'edit' && <h1>Editing Post: {originalTitle}</h1> }
          { props.action == 'new' && <h1>New Post</h1> }

          <label htmlFor='title' >Title:</label>
          <input required onChange={handleTitle} type='text' id='title' value={title} className='input-edit'/>

          <label htmlFor='text'>Text:</label>
          <textarea required onChange={handleText} name='text' id='text' value={text} className='text-area-edit'></textarea>

          <button className='btn new-btn' onClick={saveData}>Save</button>
          <Link to='/'>
            <button className='btn edit-btn'>Cancel</button>
          </Link>
        </div>
      </div>
    </>  
  )
}


export default Edit