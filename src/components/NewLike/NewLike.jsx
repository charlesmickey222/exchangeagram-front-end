import React, { useState } from 'react';
import * as profileService from '../../services/profileService.js'


const NewLike = (props) => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      profileService.removeLikedPost(props.user._id, props.postId);
      setLikes(likes - 1);
    } else {
      profileService.addLikedPost(props.user._id, props.postId);
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddLike(props.postId, likes)
    console.log(likes)
    console.log(props.postId)
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick } type="submit">
        <span className="likes-counter">{ `Like | ${likes}` }</span>
      </button>
    </form>
  )
}

export default NewLike


// import { useState } from "react"

// const NewLike = (props) => {
//   const [form, setForm] = useState({
//     like: false,
//     dislike: false
//   })

//   const handleChange = ({ target }) => {
//     setForm({ ...form, [target.name]: target.value})
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     props.handleAddLike(props.postId, form)
//     setForm({ 
//       like: false,
//       dislike: false
//     })
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="like">Like:</label>
//       <input
//         required
//         type="checkbox"
//         name="like"
//         id="like-input"
//         value={form.like}
//         onChange={handleChange}
//       />
//       <label htmlFor="dislike">Dislike:</label>
//       <input
//         required
//         type="checkbox"
//         name="dislike"
//         id="dislike-input"
//         value={form.dislike}
//         placeholder="Add a Comment"
//         onChange={handleChange}
//       />
//       <button type="submit">Add Likes</button>
//     </form>
//   )
// }

// export default NewLike