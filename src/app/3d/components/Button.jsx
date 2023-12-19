import styles from './button.module.css'
import Link from 'next/link'

export const Button = ({title, href}) => {
  return (
    <div className={styles.wrapper} >
      <Link href={href} legacyBehavior>
        <a className={styles.link}>
          <span>{title}</span>
          <span className={styles.iconWrapper}><svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.9994" cy="17" r="14.1667" transform="rotate(-180 16.9994 17)" stroke="#8b8c8c" stroke-width="1.5"></circle><path d="M15.584 12.75L11.334 17M11.334 17L15.584 21.25M11.334 17L22.6673 17" stroke="#8b8c8c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
        </a>
      </Link>
    </div>
  )
}