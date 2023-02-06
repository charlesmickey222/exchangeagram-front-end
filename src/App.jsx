// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewPost from './pages/NewPost/NewPost'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Feed from './pages/Feed/Feed'
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as profileService from './services/profileService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [userProfile,setUserProfile] = useState({})
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }
  useEffect(() =>{
    const getUserProfile = async() =>{
      const targetProfile = await profileService.fetchProfile(user.profile)
      setUserProfile(targetProfile)
    }
    getUserProfile()
  },[user])
  useEffect(() => {
    const fetchAllPosts = async () => {
      const data = await postService.index()
      console.log('DATA:', data)
      setPosts(data)
    }
    fetchAllPosts()
  }, [user])

  return (
    <>
      <NavBar user={user} profile={userProfile} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={<Landing user={user} />}
        />
        <Route 
          path="/posts" 
          element={
            <ProtectedRoute user={user}>
              <Feed posts={posts} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/new-post"
          element={
            <ProtectedRoute user={user}>
              <NewPost />
            </ProtectedRoute>  
          }
        />

      </Routes>
    </>
  )
}

export default App
