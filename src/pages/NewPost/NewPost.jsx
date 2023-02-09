import CreatePostForm from "../../components/CreatePostForm/CreatePostForm"
import "./NewPost.css"


const NewPost = (props) => {
  return (
    <>
      <h1>Create a New Post</h1>
      <div className="form-div">
        <CreatePostForm className='post-form' handleAddPost={props.handleAddPost} />
      </div>

    </>
)
}

export default NewPost