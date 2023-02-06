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
    <h1>{targetProfile.name}</h1>
  </> );
}

export default ProfilePage;