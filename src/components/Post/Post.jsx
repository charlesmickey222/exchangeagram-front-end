import './Post.css'
import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment.jsx'
import NewLike from '../NewLike/NewLike'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return ( 
  <div id="post">
    {/* Renders the users profile name and profile picture: */}
    <div>
      <img className="profile-picture" src={props.post.author.photo} alt="profile pic" />
      <h4>{props.post.author.name}</h4>
    </div>
    {/* Renders the post's photo, caption, and time posted: */}
    <img src={props.post.photo} alt="user's post here" />
    <p>{props.post.createdAt}</p>
    <p>Caption: {props.post.caption}</p>
    {/* Renders edit and delete buttons if the post belongs to the user: */}
    {props.post.author._id === props.user.profile &&
      < >
        <Link to={`/posts/${props.post._id}/edit`} state={props.post}>Edit Caption</Link>
        <button onClick={() => props.handleDeletePost(props.post._id)}>Delete Post</button>
      </>
    }
    {/* Renders Like button and whether or not the post is liked: */}
    <div>
      <h5>Likes:</h5>
      <NewLike user={props.user} handleAddLike={props.handleAddLike} postId={props.post._id} />
    </div>
    {/* Renders the comment input field and all of the comments on the post: */}
    <div>
      <h5>Comments:</h5>
      <NewComment handleAddComment={props.handleAddComment} postId={props.post._id} />
      {props.post.comments?.map(comment =>
        <Comment key={comment._id} comment={comment} />
      )}
    </div>
  </div>
  )
}

export default Post