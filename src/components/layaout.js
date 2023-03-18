import Head from 'next/head'
import Menu from './menu'
import styles from '../styles/menu.module.scss'
import Direct from './direct'
function Layaout ({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <main className={styles.mainmenu}>
        <Menu />
        <Direct />
        <section className={styles.mainContainer}>
          {children}
        </section>
      </main>
    </>
  )
}

export default Layaout
