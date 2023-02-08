import NewMessage from "../../components/CreateMesageForm/CreateMessageForm";

const Messages = (props) => {
  return ( 
  <>
  <p>This is the message page</p>
  <p>Send Message</p>
  <NewMessage user={props.user} createMessage={props.createMessage} handleAddMessage={props.handleAddMessage}/>

  </>
  );
}

export default Messages;