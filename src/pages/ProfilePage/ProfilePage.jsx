import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import './ProfilePage.css'
import { Link } from "react-router-dom";
const ProfilePage = (user) => {
  const location = useLocation()
  const [targetProfile,setTargetProfile] = useState({})
  
  useEffect(() => {
    setTargetProfile(location.state.profile)
  }, [location.state.profile, user])

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
      <>
      {user.user.profile === targetProfile._id &&  <Link to=''>edit profile</Link>}
      </>
    </div>
    </section>
  </> );
}

export default ProfilePage;