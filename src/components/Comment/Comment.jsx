import './Comment.css'

const Comment = ({ comment }) => {
  return ( 
    <div className="comment-list">
      <p><span className="comment-author">@{comment.author.name}:</span> {comment.text}</p>
    </div>
  )
}

export default Comment