const Comment = ({ comment }) => {
  return ( 
    <>
      <p>{comment.author}: {comment.text}</p>
    </>
  )
}

export default Comment