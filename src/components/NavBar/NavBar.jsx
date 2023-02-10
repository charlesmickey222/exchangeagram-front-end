import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/branding/Logo.png'

const NavBar = ({ user, profile, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><Link to="/login" className={styles.links}>Log In</Link></li>
      <li><Link to="/signup" className={styles.links}>Sign Up</Link></li>
    </ul>
  )

  const protectedLinks = (
    < >
      <ul id={styles.left}>
        {user && <li><Link to={`/profiles/${user.name.replaceAll(' ','_')}`} state={{profile}} className={styles.links}>{user.name}</Link></li>}
        <li><Link to="/profiles" className={styles.links}>Profiles</Link></li>
        <li><Link to="/posts" className={styles.links}>Feed</Link></li>
        <li><Link to="/new-post" className={styles.links}>Create Post</Link></li>
      </ul>
      <ul id={styles.right}>
        <li><Link to="" onClick={handleLogout} className={styles.links}>LOG OUT</Link></li>
        <li><Link to="/change-password"><i className="fa-solid fa-gear fa-2x"></i></Link></li>
      </ul>
    </>
  )

  return (
    <nav className={styles.container}>
      <NavLink to={'/'}><img id="logo" src={Logo} alt="camera" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
