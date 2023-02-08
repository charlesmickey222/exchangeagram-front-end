import { useLocation  } from "react-router-dom";
import { useState,useEffect } from "react";
import './ProfilePage.css'
import { Link } from "react-router-dom";
import PostPreview from "../../components/Post/PostPreview";

const ProfilePage = (props) => {
  const location = useLocation()
  const [targetProfile,setTargetProfile] = useState({})
  const [ownsProfile,setOwnsProfile] = useState({})
  const [linkName, setLinkName]= useState({})

  useEffect(() => {
    console.log(location.state.profile)
    setOwnsProfile(Boolean(props.userProfile._id === location.state.profile._id))
    if (ownsProfile){
      setTargetProfile(props.userProfile)
      setLinkName(props.userProfile.name.replaceAll(' ','_'))
    }else{
    setTargetProfile(location.state.profile)
    }
    
  }, [location.state.profile, props.user, props.userProfile, ownsProfile])

  
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
        {<Link to={`messages`}>messages</Link>}
      </div>
    </div>
    {ownsProfile ?  
        <div className="postContainer">
        {targetProfile.posts?
            targetProfile.posts.map(post => 
            <div key={`${post._id}`}>
              <PostPreview  post={post._id}/>
            </div>)
          :
        'no posts here'}
      </div>
      :
    <div className="postContainer">
      {targetProfile.posts?
          targetProfile.posts.map(post => 
          <div key={`${post}`}>
            <PostPreview  post={post}/>
          </div>)
        :
      'no posts here'}
    </div>
}
    </section>
  </> );
}

export default ProfilePage;