import { Link } from 'react-router-dom'
const NavBar = ({ user,profile, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li><Link to={`/${user.name.replaceAll(' ','_')}`} state={{profile}}>{user.name}</Link></li>
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
