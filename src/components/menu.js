import Image from 'next/image'
import styles from '../styles/menu.module.scss'
import { data } from '../api/data'
import { useRouter } from 'next/router'
import Link from 'next/link'
function Menu (props) {
  return (
    <main className={styles.menu}>
      <Home avatar='https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png' />
      {data.map((profile) => (
        <Profile key={profile.id} id={profile.id} avatar={profile.avatar} />
      ))}

    </main>
  )
}

function Profile ({ avatar, id }) {
  const router = useRouter()
  return (
    <Link href={`/chat/${id}`}>
      <div className={id === router.query.user ? styles.profileActive : styles.profileContainer}>
        <Image src={avatar} alt='profile' width={48} height={48} />
      </div>
    </Link>
  )
}

function Home ({ avatar }) {
  const router = useRouter()
  return (
    <Link href='/'>
      <div className={router.pathname === '/home' ? styles.profileActive : styles.profileContainer}>
        <Image src={avatar} alt='profile' width={48} height={48} />
      </div>
    </Link>
  )
}

export default Menu
