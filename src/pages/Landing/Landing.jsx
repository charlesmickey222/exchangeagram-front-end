import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ?
        <h1>Welcome to Exchange-O-Gram, {user.name}!</h1>
      :<>
        <h1>Welcome to Exchange-O-Gram</h1>
        <h2>Please Login or Create an Account to Continue</h2>
        <img src="/Exchange-O-Gram.png" alt="" srcset="" />
      </>
      }
    </main>
  )
}

export default Landing
