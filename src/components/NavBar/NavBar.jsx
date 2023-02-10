import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/branding/Logo.png'
import Dropdown from 'react-bootstrap/Dropdown';



const NavBar = ({ user, profile, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><Link to="/login" className={styles.links}>Log In</Link></li>
      <li><Link to="/signup" className={styles.links}>Sign Up</Link></li>
    </ul>
  )

  const protectedLinks = (
    <div className='drop-men' >
    <Dropdown className='drop-men' 
    align="start"
    >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {user ?
          <Dropdown.Item state={profile} href={`/profiles/${user.name.replaceAll(' ','_')}`}>{user &&<Link to={`/profiles/${user.name.replaceAll(' ','_')}`} state={{profile}} className={styles.links}>{user.name}</Link>}</Dropdown.Item>
        :
          ''
        }

        <Dropdown.Item href="/profiles"><Link to="/profiles" className={styles.links}>Profiles</Link></Dropdown.Item>

        <Dropdown.Item href="/posts"><Link to="/posts" className={styles.links}>Feed</Link></Dropdown.Item>

        <Dropdown.Item href="/new-post"><Link to="/new-post" className={styles.links}>Create Post</Link></Dropdown.Item>

        <Dropdown.Item onClick={handleLogout}><Link to="" onClick={handleLogout} className={styles.links}>LOG OUT</Link></Dropdown.Item>

        <Dropdown.Item><Link to="/change-password"><i className="fa-solid fa-gear fa-2x"></i></Link></Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    </div>
  )

  return (
    <nav className={styles.container}>
      <NavLink to={'/'}><img id="logo" src={Logo} alt="camera" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
