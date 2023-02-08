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
  },[location.state.targetPost])

  useEffect(()=>{
      
  },[])

  return ( 
    <div className="PostContainer">
    <img src={`${post.photo}`} alt='post'/>
    <div>
      Likes: {post.likes?post.likes.length:'0'} <NewLike user={props.user} postId={post._id} />
      {post.comments?.map(comment => <Comment key={comment._id} comment={comment} className='comment'/> )}
    </div>
    <NewComment handleAddComment={props.handleAddComment} postId={post._id} />
    </div>
  );
}

export default PostDetails;