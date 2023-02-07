import { useEffect, useState } from "react";
import { fetchPost } from "../../services/postService";
const PostPreview = (post) => {
  const [targetPost, setTargetPost] = useState({})
  console.log(post.post)
  useEffect(()=>{
    async function postGrabber(){
      const postData = await fetchPost(post.post)
      setTargetPost(postData)
    }
    postGrabber()
  },[post])
  return ( 
  <>
  <p>post</p>
  </>
  );
}

export default PostPreview;