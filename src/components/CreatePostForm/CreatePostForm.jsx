import { useState } from "react"
import './CreatePostForm.css'

const CreatePostForm = (props) => {
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
  }
    
  return (
    <>
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