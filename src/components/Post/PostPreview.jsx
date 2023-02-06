import { useEffect, useState } from "react";

const PostPreview = (post) => {
  const [targetPost, setTargetPost] = useState({})
  useEffect(()=>{
    
  })
  return ( 
  <>
  <p>post {post.post}</p>
  </>
  );
}

export default PostPreview;