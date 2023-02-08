import { useState } from "react"

const NewMessage = (props) => {
  const [form, setForm] = useState({ text: '' })
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddMessage(props.profileId, form)
    setForm({ text: '' })
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