import CreatePostForm from "../../components/CreatePostForm/CreatePostForm"

const NewPost = (props) => {
  return (
    <>
      <h1>Create a New Post</h1>
      <CreatePostForm handleAddPost={props.handleAddPost} />
    </>
)
}

export default NewPost