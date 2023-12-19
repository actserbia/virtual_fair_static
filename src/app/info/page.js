import DomeScene from '../3d/DomeScene'
import { Button } from '../3d/components/Button'
import styles from '../page.module.css'

export default function InfoPage() {
  return (
    <main className={styles.main}>
      <DomeScene />
      <Button title="Back to homepage" href={`/${process.env.NEXT_PUBLIC_ROOT}`} />
    </main>
  )
}
