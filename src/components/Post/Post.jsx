import './Post.css'
import Comment from '../Comment/Comment'
import NewComment from '../NewComment/NewComment.jsx'
import { useState } from 'react'
import NewLike from '../NewLike/NewLike'
import { Link } from 'react-router-dom'
import ProfileIcon from '../../assets/icons/profile.png'

const Post = (props) => {
  const [userState, setUserState] = useState(props.post.author)
  const photo = userState.photo ? userState.photo : ProfileIcon

  const [showComments, setShowComments] = useState(false)

  function handleCommnetClick () {
    if(!showComments){
    setShowComments(true)}
    else setShowComments(false)
  }
  
  return ( 
  <div id="post">
    <div className="author">
      <div className='top-post'>
        <img className="profile-picture" src={photo} alt="profile pic" />
        <h4>{userState.name}</h4>
      </div>
    </div>

    <img className="photo" src={props.post.photo} alt="user's post here" />
    <p>{props.post.caption}</p>
    <p>{props.post.createdAt.substr(0, 10)}</p>

    <div className="update-delete-like">
      <NewLike user={props.user} post={props.post} handleAddLike={props.handleAddLike} postId={props.post._id} />
      {userState._id === props.user.profile &&
        < >
          <Link to={`/posts/${props.post._id}/edit`} state={props.post}><button className='post-button'>Edit Caption</button></Link>
          <button className='post-button' onClick={() => props.handleDeletePost(props.post._id)}>Delete Post</button>
        </>
      }
    </div>

    <div>
      <span onClick={() =>handleCommnetClick()}><h4>{showComments ? 'Comments:' : 'Click Here for Comments'}</h4></span>
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