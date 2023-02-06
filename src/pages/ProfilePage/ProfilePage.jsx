import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
const ProfilePage = () => {
  const location = useLocation()
  const [targetProfile,setTargetProfile] = useState({})
  useEffect(() => {
    setTargetProfile(location.state.userProfile)
  }, [location.state.userProfile])
  
  return ( 
  <>
  <h1>this is a profile page</h1>
    <h2>username:{targetProfile.name}</h2>
  </> );
}

export default ProfilePage;