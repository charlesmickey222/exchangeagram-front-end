
import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import Comment from "../../components/Comment/Comment.jsx";

import './PostDetails.css'

const PostDetails = (props) => {
  const location = useLocation()
  const [post, setPost] = useState({})
  
  useEffect(()=>{
    setPost(location.state.targetPost)
    localStorage.setItem('post', JSON.stringify(post))
  },[location.state.targetPost, post])

  if (!post) return <p>Loading...</p>

  return ( 
    <div className="PostContainer">
    <img src={`${post.photo}`} className='pic' alt='post'/>
    <div className="caption">{post.caption}</div>
    <div className="comments">
    Likes: {post.likes?post.likes.length:'0'}
      {post.comments?.map(comment => <Comment key={comment._id} comment={comment} className='comment'/>)}
    </div>
    </div>
  )
}

export default PostDetails