import Post from "../../components/Post/Post"
import './Feed.css'

const Feed = (props) => {
  return (
    <div className="feed-container">
      <h1>Post Feed</h1>
      {props.posts.length ?
        < >
          {props.posts?.map((post, idx) => (
            < >
              <Post
                key={idx}
                post={post}
                handleAddComment={props.handleAddComment}
                handleDeletePost={props.handleDeletePost}
                handleAddLike={props.handleAddLike}
                user={props.user}
              />
            </>
          ))}
        </>
        :
        < >
          <h4>Loading Feed...</h4>
        </>
      }
    </div>
  )
}

export default Feed