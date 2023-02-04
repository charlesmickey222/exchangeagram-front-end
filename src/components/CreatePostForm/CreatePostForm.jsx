import { useState } from "react"



const CreatePostForm = (props) => {
  
  const [photoData, setPhotoData] = useState({})
  
  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  
  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
    
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

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
        <input type='text' name='caption' />
      </form>
    </>
)
}

export default CreatePostForm