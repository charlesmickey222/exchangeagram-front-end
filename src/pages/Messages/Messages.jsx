import NewMessage from "../../components/CreateMesageForm/CreateMessageForm"
import MessageList from "../MessageList/MessageList"
import * as messageService from '../../services/messageService'
import { useEffect, useState } from "react"


const Messages = (props) => {
  const [messages, setMessages] = useState([])
  const [messageCounter, setCounter] = useState(0)

  useEffect(() => {
    async function getMessages() {
      const messageData = await messageService.messageList(props.user.profile)
      setMessages(messageData, ...messages)
    }
    getMessages()
  }, [messageCounter])

  return ( 
    <>
      <p>This is the message page</p>
      <p>Send Message</p>
      <NewMessage
        messages={messages}
        user={props.user}
        counter={messageCounter} 
        setCounter={setCounter}
        handleAddMessage={props.handleAddMessage}
      />
      {messages?.map(message =>
          <MessageList key={message._id} message={message}/>
      )}
    </>
  )
}

export default Messages