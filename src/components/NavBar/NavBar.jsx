import './NavBar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/branding/Logo.png'

const NavBar = ({ user, profile, handleLogout }) => {
  return (
    
    <nav>
      {user ?
        <ul id="navbar">
          <div id="navbar-left">
            <li>
              <NavLink to={'/'}><img id="logo" src={Logo} alt="camera" /></NavLink>
            </li>
            <li>
              <Link 
                to={`/profiles/${user.name.replaceAll(' ','_')}`} 
                state={{profile}} 
                style={{textDecoration: 'none', color: 'black'}}
              >
                {user.name}
              </Link>
            </li>
            <li>
              <Link
                to="/profiles"
                style={{textDecoration: 'none', color: 'black'}}
              >
                Profiles
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                style={{textDecoration: 'none', color: 'black'}}
              >
                Feed
              </Link>
            </li>
            <li>
              <Link
                to="/new-post"
                style={{textDecoration: 'none', color: 'black'}}
              >
                Create Post
              </Link>
            </li>
          </div>
          <div id="navbar-right">
            <li>
              <Link
                to=""
                onClick={handleLogout}
                style={{textDecoration: 'none', color: 'black'}}
              >
                LOG OUT
              </Link>
            </li>
            <li>
              <Link
                to="/change-password"
                style={{textDecoration: 'none', color: 'black'}}
              >
                <i className="fa-solid fa-gear"></i>
              </Link>
            </li>
          </div>
        </ul>
      :
        <ul>
          <li>
            <Link
              to="/login"
              style={{textDecoration: 'none', color: 'black'}}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              style={{textDecoration: 'none', color: 'black'}}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
