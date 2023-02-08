import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const EditPostForm = (props) => {
  const { state } = useLocation()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState(state)
  
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    props.handleUpdatePost(formData)
    navigate('/posts')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Update Caption:
        </label>
        <input  type="text"
          autoComplete="off"
          value={formData.caption}
          name="caption"
          onChange={handleChange}/>
        <button type="submit">Update Post</button>
      </form>
      <img src={formData.photo} alt="original post" />
    </>
)
}

export default EditPostForm 