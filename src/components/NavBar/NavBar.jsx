import { Link } from 'react-router-dom'
import { fetchProfile } from '../../services/profileService'
import { useEffect, useState } from 'react'
const NavBar = ({ user, handleLogout }) => {
  const [userProfile, setUserProfile]= useState({})
  useEffect(()=>{
      async function profileGrabber(evt){
        evt.preventDefault()
        const targetProfile = await fetchProfile(user.profile)
        setUserProfile(targetProfile)
      }
      profileGrabber()
  })
  return (
    <nav>
      {user ?
        <ul>
          <li><Link to={`/${user.name.replaceAll(' ','_')}`} state={{userProfile}}>{user.name}</Link></li>
          <li><Link to="/posts">Feed</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
      :
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
