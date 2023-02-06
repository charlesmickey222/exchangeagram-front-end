//import Post from "../../components/Post/Post"

const Feed = (props) => {
  console.log('POSTS:', props)
  return (
    < >
      {props.posts.map((post) => (
        <p key={post._id}>
          {post.caption}
        </p>
      ))}
    </>
  )
}

export default Feed