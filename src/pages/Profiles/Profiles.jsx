import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import {Link} from 'react-router-dom'

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
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
        <ul>
          {profiles.map(profile =>
            <li key={`${profile._id}`}>
              <img src={`${profile.photo}`} style={{height:'10vh'}} alt='profile'/>
              <Link to={`${profile.name.replaceAll(' ','_')}`} state={{profile}}>{profile.name}</Link>
            </li>
          )}

          </ul>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles