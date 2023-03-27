import { getSession, signIn } from 'next-auth/react'
import styles from '../styles/index.module.scss'
import DiscordLogo from '../../public/logo.svg'
import Image from 'next/image'
import { IconBrandGithub } from '@tabler/icons-react'
export default function Index ({ session }) {
  const google = <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17.64 9.20483C17.64 8.56665 17.5827 7.95301 17.4764 7.36392H9V10.8453H13.8436C13.635 11.9703 13.0009 12.9235 12.0477 13.5616V15.8198H14.9564C16.6582 14.253 17.64 11.9457 17.64 9.20483Z' fill='#4285F4' /><path d='M9 17.9999C11.43 17.9999 13.4673 17.194 14.9564 15.8194L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.7099H0.957275V13.0417C2.43818 15.9831 5.48182 17.9999 9 17.9999Z' fill='#34A853' /><path d='M3.96409 10.7097C3.78409 10.1697 3.68182 9.59292 3.68182 8.99973C3.68182 8.40655 3.78409 7.82973 3.96409 7.28973V4.95792H0.957273C0.347727 6.17292 0 7.54746 0 8.99973C0 10.452 0.347727 11.8266 0.957273 13.0416L3.96409 10.7097Z' fill='#FBBC05' /><path d='M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92546L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z' fill='#EA4335' /></svg>
  return (

    <main className={styles.container}>

      <main className={styles.containerMenu}>
        <section className={styles.menu}>
          <Image src={DiscordLogo} alt='Discord Logo' width={100} height={100} />
          <div>
            <p>Download</p>
            <p>Nitro</p>
            <p>Discover</p>
            <p>Safely</p>
            <p>Support</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>

          <button onClick={() => signIn('google')}>
            Login
            </button>
        </section>
      </main>
      <div className={styles.titleContainer}>
        <p className={styles.title}>IMAGINE A PLACE...</p>
        <p className={styles.subtitle}>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often..</p>

      </div>
      <div className={styles.containerButtons}>
        <button className={styles.buttonGoogle} onClick={() => signIn('google')}>
          {google} <p>Sign in with Google</p>
        </button>
        <button className={styles.buttonGithub} onClick={() => signIn('github')}>
          <IconBrandGithub /> <p>Sign in with Github</p>
        </button>
      </div>
      <div className={styles.containerWarning}>
        <p className={styles.warning}>Warning: All your messages or actions will be deleted upon logging out.</p>
      </div>
    </main>

  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }
  return {
    props: {

    }
  }
}
