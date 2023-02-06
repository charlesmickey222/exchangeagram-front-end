import { useState } from "react"
import * as postService from '../../services/postService.js'
import { Link, useNavigate } from "react-router-dom"

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
    console.log(e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await postService.create(formData, photoData.photo)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const { caption } = formData

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label htmlFor="photo-upload">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
        <input  type="text"
          autoComplete="off"
          value={formData.caption}
          name="caption"
          onChange={handleChange}/>
        <button type="submit">Create Post</button>
      </form>
    </>
)
}

export default CreatePostForm 