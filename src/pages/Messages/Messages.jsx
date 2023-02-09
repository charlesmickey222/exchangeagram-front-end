import NewMessage from "../../components/CreateMesageForm/CreateMessageForm";
import MessageList from "../MessageList/MessageList";

const Messages = (props) => {
  return ( 
  <>
    <p>This is the message page</p>
    <p>Send Message</p>
    <NewMessage user={props.user} createMessage={props.createMessage} handleAddMessage={props.handleAddMessage}/>
    <MessageList profile={props.profile} user={props.user} />
  </>
  )
}

export default Messages;