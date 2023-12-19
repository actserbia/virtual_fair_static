import DetailScene from '../3d/DetailScene'
import { Button } from '../3d/components/Button'
import styles from '../page.module.css'

export default function DetailPage() {
  return (
    <main className={styles.main}>
      <DetailScene />
      <Button title="Back to homepage" href="/" />
    </main>
  )
}
