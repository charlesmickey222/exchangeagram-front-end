import './Post.css'
import Comment from '../Comment/Comment'
import * as postService from '../../services/postService.js'
import { useState } from 'react'
import NewComment from '../NewComment/NewComment.jsx'
import { useParams } from 'react-router-dom'

const Post = (props) => {
  const { id } = useParams()
  console.log('ID:', id)
  const [post, setPost] = useState(null)
  // const handleAddComment = async (commentData) => {
  //   const newComment = await postService.createComment(id, commentData)
  //   setPost({...post, comments: [...post.comments, newComment]})
  // }
  const handleAddComment = async (commentData) => {
    const updatedPost = await postService.createComment(id, commentData)
    setPost(updatedPost)
  }
  return ( 
  <div id="post">
    <div>
      <img className="profile-picture" src={props.post.author.photo} alt="profile pic" />
      <h4>{props.post.author.name}</h4>
    </div>
    <img src={props.post.photo} alt="user's post here" />
    <p>{props.post.createdAt}</p>
    <p>Caption: {props.post.caption}</p>
    <h5>Comments:</h5>
    {props.post.comments.map(comment =>
      <Comment key={comment._id} comment={comment} />
    )}
      <NewComment handleAddComment={handleAddComment} />
  </div>
  )
}

export default Post