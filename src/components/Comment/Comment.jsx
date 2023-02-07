const Comment = ({ comment }) => {
  return ( 
    <>
      <p>{comment.author.name}: {comment.text}</p>
    </>
  )
}

export default Comment