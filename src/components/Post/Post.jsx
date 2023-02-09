import './Post.css'
import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment.jsx'
import { useState } from 'react'
import NewLike from '../NewLike/NewLike'
import { Link } from 'react-router-dom'
import ProfileIcon from '../../assets/icons/profile.png'

const Post = (props) => {
  const photo = props.post.author.photo ? props.post.author.photo : ProfileIcon
  const [showComments, setShowComments] = useState(false)

  function handleCommnetClick (){
    if(!showComments){
    setShowComments(true)}
    else setShowComments(false)
  }
  
  return ( 
  <div id="post">
    {/* Renders the users profile name and profile picture: */}
    <div className="author">
      <img className="profile-picture" src={photo} alt="profile pic" />
      <h4>{props.post.author.name}</h4>
    </div>
    {/* Renders the post's photo, caption, and time posted: */}
    <img className="photo" src={props.post.photo} alt="user's post here" />
    <p>{props.post.caption}</p>
    <p>{props.post.createdAt.substr(0, 10)}</p>
    {/* Renders edit and delete buttons if the post belongs to the user: */}
    <div className="update-delete-like">
      <NewLike user={props.user} post={props.post} handleAddLike={props.handleAddLike} postId={props.post._id} />
      {props.post.author._id === props.user.profile &&
        < >
          <Link to={`/posts/${props.post._id}/edit`} state={props.post}><button>Edit Caption</button></Link>
          <button onClick={() => props.handleDeletePost(props.post._id)}>Delete Post</button>
        </>
      }
    </div>
    {/* Renders the comment input field and all of the comments on the post: */}
    <div>
    <a onClick={() =>handleCommnetClick()}><h4>Comments:</h4></a>
      {showComments && 
      <>
      <NewComment handleAddComment={props.handleAddComment} postId={props.post._id} />
      {props.post.comments?.map(comment =>
        <Comment key={comment._id} comment={comment} />
        )}
      </>
      }
    </div>
  </div>
  )
}

export default Post