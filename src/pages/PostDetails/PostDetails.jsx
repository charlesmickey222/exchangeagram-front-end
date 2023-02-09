import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import Comment from "../../components/Comment/Comment.jsx";
import NewComment from "../../components/NewComment/NewComment.jsx";
import NewLike from "../../components/NewLike/NewLike.jsx";

import './PostDetails.css'
const PostDetails = (props) => {
  const location = useLocation()
  const [post, setPost] = useState({})
  
  useEffect(()=>{
    setPost(location.state.targetPost)
    localStorage.setItem('post', JSON.stringify(post))
  },[location.state.targetPost, post])

  useEffect(()=>{
    
  },)

  if (!post) return <p>loading</p>
  return ( 
    <div className="PostContainer">
    <img src={`${post.photo}`} alt='post'/>
    <div>
    Likes: {post.likes?post.likes.length:'0'}
    </div>
    <div>

      {post.comments?.map(comment => <Comment key={comment._id} comment={comment} className='comment'/>)}
    </div>
    <NewComment handleAddComment={props.handleAddComment} postId={post._id} />
    </div>
  );
}

export default PostDetails;