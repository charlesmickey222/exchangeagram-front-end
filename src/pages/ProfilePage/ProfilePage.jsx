import { useLocation  } from "react-router-dom"
import { useState,useEffect } from "react"
import './ProfilePage.css'
import { Link } from "react-router-dom"
import PostPreview from "../../components/Post/PostPreview"
import ProfileIcon from '../../assets/icons/profile.png'

const ProfilePage = (props) => {
  const location = useLocation()
  const [targetProfile,setTargetProfile] = useState({})
  const [ownsProfile,setOwnsProfile] = useState({})

  useEffect((evt) => {
    setOwnsProfile(Boolean(props.userProfile._id === location.state.profile._id))
    if (ownsProfile) {
      setTargetProfile(props.userProfile)
    } else {
      setTargetProfile(location.state.profile)
    }
    localStorage.setItem('targetProfile', JSON.stringify(targetProfile))
  }, [location.state.profile, props.user, props.userProfile, ownsProfile, targetProfile])

  if (!targetProfile.posts) return <p>Loading...</p>
  
  return ( 
    <main>
      <section>
        <div className="profileHeader">
          <div className="profPic">
            <img src={`${targetProfile.photo ? targetProfile.photo : ProfileIcon}`} alt='profile'/>
          </div>
          <p className="username">{targetProfile.name}</p>
          <div className="statsContainer">
            Posts: {targetProfile.posts ? targetProfile.posts.length : 0}
          </div>
          <Link to={`messages`}>CHATROOM</Link>
        </div>
        {ownsProfile&& 
          <div className="postContainer">
            {targetProfile.posts ?
              targetProfile.posts.map(post =><PostPreview key={`${post._id}`} className='preview' post={post._id}/>)
            :
              <p>No Posts Yet</p>
            }
          </div>}

          {!ownsProfile&&<div className="postContainer">
            {targetProfile.posts ?
              targetProfile.posts.map(post =>
                <div key={`${post}`}>
                  {!post.photo?<PostPreview className='preview' post={post}/>:''}
                </div>
              )
            :
              <p>No Posts Yet</p>
            }
          </div>
        }
      </section>
    </main>
  )
}

export default ProfilePage