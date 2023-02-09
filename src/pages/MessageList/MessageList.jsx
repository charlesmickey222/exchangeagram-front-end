const MessageList = (props) => {
  console.log('MESSAGES:', props.profile.messages)
  return ( 
    <>
      {/* {props.profile.messages.map(message =>
        <p>{message.author}: {message.text}</p>
      )} */}
    </>
  )
}

export default MessageList;