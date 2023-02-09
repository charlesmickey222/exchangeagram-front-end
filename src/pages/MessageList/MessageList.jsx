const MessageList = (props) => {
  console.log('MESSAGE', props.message)
  return ( 
    <>
      <p>{props.user.name}: {props.message.text}</p>
    </>
  )
}

export default MessageList;