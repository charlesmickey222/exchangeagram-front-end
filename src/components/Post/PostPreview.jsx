import { useEffect, useState } from "react";
import { fetchPost } from "../../services/postService";
const PostPreview = (post) => {
  const [targetPost, setTargetPost] = useState({})
  console.log(post)
  useEffect(()=>{
    async function postGrabber(){
      const postData = await fetchPost(post.post)
      setTargetPost(postData)
    }
    postGrabber()
  },[post])
  return ( 
  <>
  {targetPost?
  <>
  <img src={`${targetPost.photo}`} alt='post preview' style={{height:'20vh'}}/>
  </>:'loading post'}
  </>
  );
}

export default PostPreview;