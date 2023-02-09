import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import  './signupForm.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='signup-form'
    >
      <div className='name-input formDiv'>
        <label htmlFor="name" className={styles.label}>Name</label><br/>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className='email-input formDiv'>
        <label htmlFor="email" className={styles.label}>Email</label><br/>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className='password-input formDiv'>
        <label htmlFor="password" className={styles.label}>Password</label><br/>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className='password-confirm formDiv'>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password
        </label><br/>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className='photo-input formDiv'>
        <label htmlFor="photo-upload" className='photo-input'>
          Upload Photo
        </label><br/>
        <input className='photo-upload-button'
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div>
      <div className='submit-form-button formDiv'>
        <button disabled={isFormInvalid()} className='signup-button'>
          Sign Up
        </button><br/>
        <Link to="/">
          <button className='signup-button'>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
