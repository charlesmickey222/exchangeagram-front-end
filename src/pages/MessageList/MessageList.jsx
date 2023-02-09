const MessageList = (props) => {
  console.log('MESSAGE', props.message)
  return ( 
    <>
      <p>{props.message.author.name}: {props.message.text}</p>
    </>
  )
}

export default MessageList;