import './MessageList.css'

const MessageList = (props) => {
  return ( 
    <>
      <p><span className="msg-author">@{props.message.author.name}:</span> {props.message.text}</p>
    </>
  )
}

export default MessageList;