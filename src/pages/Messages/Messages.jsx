import NewMessage from "../../components/CreateMesageForm/CreateMessageForm";
import MessageList from "../MessageList/MessageList";
import * as messageService from '../../services/messageService'
import { useEffect, useState } from "react";


const Messages = (props) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function getMessages() {
      const messageData = await messageService.messageList(props.user.profile)
      setMessages(messageData, ...messages)
    }
    getMessages()
  }, [])

  return ( 
  <>
    <p>This is the message page</p>
    <p>Send Message</p>
    <NewMessage
      messages={messages}
      user={props.user} 
      handleAddMessage={props.handleAddMessage}
    />
    {messages?.map(message =>
        // <MessageList key={message._id} message={message} user={props.user} />
        console.log(message)
        // <p key={message._id}>{message.author}: {message.text}</p>
      )}
  </>
  )
}

export default Messages;