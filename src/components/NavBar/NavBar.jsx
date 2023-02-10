import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/branding/Logo.png'
import { Dropdown } from 'react-bootstrap';
import './NavBar.module.css'


const NavBar = ({ user, profile, handleLogout }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 640);
  const [isMobile, setMobile] = useState(window.innerWidth < 640);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 640);
    setMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  },[]);


  const publicLinks = (
    <ul>
      <li><Link to="/login" className={styles.links}>Log In</Link></li>
      <li><Link to="/signup" className={styles.links}>Sign Up</Link></li>
    </ul>
  )

  const protectedLinks = (
    < >
    
    { isMobile && <div className='drop-men mobile'>
    <Dropdown className='drop-men' 
    align="start"
    >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>{user && <Link to={`/profiles/${user.name.replaceAll(' ','_')}`} state={{profile}} className={styles.links}>{user.name}</Link>}</Dropdown.Item>

        <Dropdown.Item href="/profiles"><Link to="/profiles" className={styles.links}>Profiles</Link></Dropdown.Item>

        <Dropdown.Item href="/posts"><Link to="/posts" className={styles.links}>Feed</Link></Dropdown.Item>

        <Dropdown.Item href="/new-post"><Link to="/new-post" className={styles.links}>Create Post</Link></Dropdown.Item>

        <Dropdown.Item onClick={handleLogout}><Link to="" onClick={handleLogout} className={styles.links}>LOG OUT</Link></Dropdown.Item>

        <Dropdown.Item><Link to="/change-password"><i className="fa-solid fa-gear fa-2x"></i></Link></Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
    </div> }


  {isDesktop &&
      <>
      <ul id='left'>
        {user && <li><Link to={`/profiles/${user.name.replaceAll(' ','_')}`} state={{profile}} className={styles.links}>{user.name}</Link></li>}
        <li><Link to="/profiles" className={styles.links}>Profiles</Link></li>
        <li><Link to="/posts" className={styles.links}>Feed</Link></li>
        <li><Link to="/new-post" className={styles.links}>Create Post</Link></li>
      </ul>
      <ul id='right'>
        <li><Link to="" onClick={handleLogout} className={styles.links}>LOG OUT</Link></li>
        <li><Link to="/change-password"><i className="fa-solid fa-gear fa-2x"></i></Link></li>
      </ul>
      </>
    }

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
