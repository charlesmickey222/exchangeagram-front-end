import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import './ProfilePage.css'
const ProfilePage = () => {
  const location = useLocation()
  const [targetProfile,setTargetProfile] = useState({})
  useEffect(() => {
    setTargetProfile(location.state.profile)
  }, [location.state.profile])
  if (!targetProfile) return <p>loading</p>
  return ( 
  <>
    <section>
    <div className="profileHeader">
      <div className="profPic">
      <img src={`${targetProfile.photo}`} alt='profile'/>
      </div>
      <p className="username">{targetProfile.name}</p>
      <div className="statsContainer">
        posts: {targetProfile.posts?targetProfile.posts.length:0}
      </div>
    </div>
    </section>
  </> );
}

export default ProfilePage;