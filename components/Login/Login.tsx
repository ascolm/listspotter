import styles from './Login.module.scss';
import queryUrl from './queryParams'

export default function Login() {
  return (
    <>
      <div className={styles.base}>
      <div>
        <h1>Listspotter.</h1>
        <p>Create playlists from your saved songs in <img className={styles.spotifyLogo} src="./Spotify_Logo_RGB_Green.png" alt=""/> using intuitive genre filters.</p>
        <a href={queryUrl} className={styles.loginButton}>LOGIN</a>
      </div>
    </div>
    </>
  )
}
