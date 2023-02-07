import Post from "../../components/Post/Post"

const Feed = (props) => {
  return (
    < >
      {props.posts?.map((post) => (
        <Post
          key={post._id}
          post={post}
          handleAddComment={props.handleAddComment}
          handleDeletePost={props.handleDeletePost}
          handleAddLike={props.handleAddLike}
        />
      ))}
    </>
  )
}

export default Feed