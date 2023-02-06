const Comment = (props) => {
  return ( 
    <>
      <p>{props.comment.author}: {props.comment.text}</p>
    </>
  )
}

export default Comment