import Post from "../../components/Post/Post"

const Feed = (props) => {
  return (
    < >
      {props.posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  )
}

export default Feed