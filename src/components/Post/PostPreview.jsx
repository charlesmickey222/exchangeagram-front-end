import { useEffect, useState } from "react"
import { fetchPost } from "../../services/postService"
import { Link } from "react-router-dom"

const PostPreview = (post) => {
  const [targetPost, setTargetPost] = useState({})
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
  <Link to={`${targetPost._id}`} state={{targetPost}}>
  <img src={`${targetPost.photo}`} alt='post preview' style={{height:'20vh'}}/>
  </Link>:'loading post'}
  </>
  )
}

export default PostPreview