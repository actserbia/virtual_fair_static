import MainScene from './3d/MainScene'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainScene />
    </main>
  )
}
