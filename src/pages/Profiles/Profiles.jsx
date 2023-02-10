import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import {Link} from 'react-router-dom'
import ProfileIcon from '../../assets/icons/profile.png'
import './Profiles.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])
  
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Profiles</h1>
      {profiles.length ? 
        <>
        <div className="profile-container">
              <ul>
                {profiles.map(profile =>
                  <li key={`${profile._id}`}>
                    <img src={`${profile.photo ? profile.photo : ProfileIcon}`} style={{height:'10vh'}} alt='profile'/>
                    <Link to={`${profile.name.replaceAll(' ','_')}`} className="link"state={{profile}}>{profile.name}</Link>
                  </li>
                )}
              </ul>
              </div>
            </>
          :
          <p>No Profiles Yet</p>
        }
    </>
  )
}

export default Profiles