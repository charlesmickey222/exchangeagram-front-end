import { useState } from "react"

const NewMessage = (props) => {
  const profileId = props.user.profile
  const [form, setForm] = useState({ text: '' })

  const handleChange = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddMessage(profileId, form)
    setForm({text: ''})
    props.setCounter(props.counter + 1)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.text}
        placeholder="Add message"
        onChange={handleChange}
      />
      <button type="submit">Send Message</button>
    </form>
  )
}

export default NewMessage