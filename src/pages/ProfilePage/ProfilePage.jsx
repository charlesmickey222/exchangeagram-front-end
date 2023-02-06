import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import './ProfilePage.css'
const ProfilePage = () => {
  const location = useLocation()
  const [targetProfile,setTargetProfile] = useState({})
  useEffect(() => {
    setTargetProfile(location.state.userProfile)
  }, [location.state.userProfile])
  
  return ( 
  <>
    <div className="profileHeader">
      <div className="profPic">
      <img src={`${targetProfile.photo}`} alt='profile'/>
      </div>
      <p className="username">{targetProfile.name}</p>
    </div>
    <div className="statsContainer">
      <table>
        <tr>
          <th>posts</th>
        </tr>
        <tr>
          <td>{targetProfile.posts.length}</td>
        </tr>
      </table>
    </div>
  </> );
}

export default ProfilePage;