import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ?
        <h1>Welcome to Exchange-O-Gram, {user.name}!</h1>
      :
        <h1>Please Sign In to Continue</h1>
      }
    </main>
  )
}

export default Landing
