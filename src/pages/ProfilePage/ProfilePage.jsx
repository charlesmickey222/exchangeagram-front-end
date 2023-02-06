import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import './ProfilePage.css'
const ProfilePage = () => {
  const location = useLocation()
  const [targetProfile,setTargetProfile] = useState({})
  useEffect(() => {
    setTargetProfile(location.state.userProfile)
  }, [location.state.userProfile])
  if (!targetProfile) return <p>loading</p>
  return ( 
  <>
    <section>
    <div className="profileHeader">
      <div className="profPic">
      <img src={`${targetProfile.photo}`} alt='profile'/>
      </div>
      <p className="username">{targetProfile.name}</p>
      <table className="statsContainer">
        <tr>
          <th>posts</th>
        </tr>
        <tr>
          <td>{targetProfile.posts?`${targetProfile.posts.length}`:'0'}</td>
        </tr>
      </table>
    </div>
    </section>
  </> );
}

export default ProfilePage;