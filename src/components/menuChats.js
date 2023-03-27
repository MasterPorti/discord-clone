import Image from 'next/image'
import styles from '../styles/direct.module.scss'
import { data } from '../api/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
function MenuChats (props) {
  return (
    <section className={styles.sectionChats}>
      {data.map((profile) => (
        <Chat key={profile.id} avatar={profile.avatar} name={profile.name} id={profile.id} status={profile.status} />
      ))}
    </section>
  )
}

function Chat ({ avatar, name, id, status }) {
  const router = useRouter()
  const statusClases = {
    online: styles.online,
    idle: styles.idle,
    disturd: styles.disturd,
    invisible: styles.invisible
  }
  const statustyle = statusClases[status || styles.online]
  return (
    <Link href={`/chat/${id}`}>
      <div className={`${router.query.user === id ? styles.chatActive : ''} ${styles.chatPreview}`}>
        <div>
          <Image alt='profile' src={avatar} width={100} height={100} />
          <p>{name}</p>
        </div>
        <div className={styles.otherbuttons}>
          <div className={statustyle} />
          <svg x='0' y='0' aria-hidden='true' role='img' width='24' height='24' viewBox='0 0 18 18'><polygon fillRule='nonzero' fill='currentColor' points='15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8' /></svg>
        </div>
      </div>
    </Link>
  )
}

export default MenuChats
