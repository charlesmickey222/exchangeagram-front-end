const MessageList = (props) => {
  return ( 
    <>
      <p>{props.message.author.name}: {props.message.text}</p>
    </>
  )
}

export default MessageList;