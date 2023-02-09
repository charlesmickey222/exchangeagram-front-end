import { useState } from "react"
// import * as postService from '../../services/postService.js'
import { Link, useNavigate } from "react-router-dom"
import './CreatePostForm.css'

const CreatePostForm = (props) => {
  const navigate = useNavigate()


  const [photoData, setPhotoData] = useState({})
  
  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }
  
  const [formData, setFormData] = useState({
    caption: '',
  })
  
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    props.handleAddPost(formData, photoData.photo)
    // try {
    //   await postService.create(formData, photoData.photo)
    //   navigate('/posts')
    // } catch (err) {
    //   console.log(err)
    // }
  }

  const { caption } = formData

  return (

    <>
      <form className='new-post-form' onSubmit={handleSubmit}>
      <label htmlFor="photo-upload">

    <main>
      <form onSubmit={handleSubmit} className='signup-form'>
      <label htmlFor="photo-upload" className="photo-input">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          required
          className="photo-upload-button"
          onChange={handleChangePhoto}
        />
        <label>
          Add a Caption
        </label>
        <input  type="text"
          autoComplete="off"
          value={formData.caption}
          name="caption"
          onChange={handleChange}/>
        <button type="submit" className="signup-button">Create Post</button>
      </form>
    </main>
    </>
)
  }

export default CreatePostForm 