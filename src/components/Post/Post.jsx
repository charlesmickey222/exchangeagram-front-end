import './Post.css'
import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment.jsx'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return ( 
  <div id="post">
    <div>
      <img className="profile-picture" src={props.post.author.photo} alt="profile pic" />
      <h4>{props.post.author.name}</h4>
    </div>
    <img src={props.post.photo} alt="user's post here" />
    <p>{props.post.createdAt}</p>
    <p>Caption: {props.post.caption}</p>
    <Link to={`/posts/${props.post._id}/edit`} state={props.post}>Edit Caption</Link>
    <button onClick={() => props.handleDeletePost(props.post._id)}>Delete Post</button>
    <h5>Comments:</h5>
    {props.post.comments?.map(comment =>
      <Comment key={comment._id} comment={comment} />
    )}
      <NewComment handleAddComment={props.handleAddComment} postId={props.post._id} />
  </div>
  )
}

export default Post