import { useState } from "react"

const NewMessage = (props) => {
  const [form, setForm] = useState({ text: '' })
  const [messages, setMessages] = useState([])
  const handleChange = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let messageText = form.text
    setMessages([messageText, ...messages])
    setForm({text: ''})
    const messageDataObj = {'text' : messageText,
      'author' : props.user._id}
    props.createMessage(props.user._id, messageDataObj)
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