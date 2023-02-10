import React, { useState } from 'react';
import * as profileService from '../../services/profileService.js'

const NewLike = (props) => {
  const [likes, setLikes] = useState((props.post.likes ? props.post.likes.length : 0));
  const [isClicked, setIsClicked] = useState(true);


  const handleClick = () => {
    if (!isClicked) {
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
