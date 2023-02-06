import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h2>Welcome to Exchangeagram</h2>
    </main>
  )
}

export default Landing
