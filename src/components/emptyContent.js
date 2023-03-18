import Image from 'next/image'
import styles from '../styles/Home.module.scss'
function EmptyContent ({ picture, children }) {
  return (
    <main className={styles.mainContainer}>
      <Image src={picture} alt='Image Friends' width={300} height={300} />
      <p>
        {children}
      </p>
    </main>
  )
}

export default EmptyContent
