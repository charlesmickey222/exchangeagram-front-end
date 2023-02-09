// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewPost from './pages/NewPost/NewPost'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Feed from './pages/Feed/Feed'
import EditPostForm from './pages/EditPost/EditPost'
import Messages from './pages/Messages/Messages'
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as profileService from './services/profileService'

// styles
import './App.css'
import PostDetails from './pages/PostDetails/PostDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [userProfile,setUserProfile] = useState({})
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  const handleAddComment = async (postId, commentData) => {
    const updatedPost = await postService.createComment(postId, commentData)
    setPosts(posts.map(post => post._id === updatedPost._id ? updatedPost : post))
  }

  const handleAddPost = async (postData, photoData) => {
    const newPost = await postService.create(postData, photoData)
    setPosts([newPost, ...posts])
    navigate('/posts')
  }

  const handleDeletePost = async (id) => {
    const deletedPost = await postService.deletePost(id)
    setPosts(posts.filter(p => p._id !== deletedPost._id))
    navigate('/posts')
  }

  const handleUpdatePost = async (postData) => {
    const updatedPost = await postService.update(postData)
    setPosts(posts.map((p) => postData._id === p._id ? updatedPost : p))
    navigate('/posts')
  }

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
      setPosts(data)
    }
    fetchAllPosts()
  }, [user])

  // useEffect(() => {
  //   const fetchAllMessages = async () => {
  //     const data = await profileService.messageList()
  //     setMessages(data)
  //   }
  //   if (user) fetchAllMessages()
  // },[user])

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
              <Feed
                posts={posts}
                user={user}
                handleAddComment={handleAddComment}
                handleDeletePost={handleDeletePost}
              />
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
              <ProfilePage user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfilePage userProfile={userProfile} user={user}/>
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
              <NewPost handleAddPost={handleAddPost} />
            </ProtectedRoute>  
          }
        />
        <Route path="/profiles/:id/:id"
          element={
            <ProtectedRoute user={user}>
              <PostDetails 
                user={user}
                handleAddComment={handleAddComment}
                handleDeletePost={handleDeletePost}
                />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditPostForm handleUpdatePost={handleUpdatePost} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profiles/:id/messages'
          element={
            <ProtectedRoute user={user}>
              <Messages 
                profile={userProfile}
                createMessage={profileService.createMessage}
                user={user} />
            </ProtectedRoute>
          }
          />

      </Routes>
    </>
  )
}

export default App
