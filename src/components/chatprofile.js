import Image from 'next/image'
import styles from '../styles/chat.module.scss'
function Chatprofile ({ user }) {
  return (
    <div className={styles.chatProfileContainer}>
      <Image src={user.avatar} width={200} height={200} alt='profile Avatar' />
      <h3>{user.name}</h3>
      <p>This is the beginning of your direct message history with <span>{user.name}.</span></p>
      <div className={styles.chatProfileButtons}>
        <p>No servers in common</p>
        <button>Remove Friend</button>
        <button>Block</button>
      </div>
    </div>
  )
}

export default Chatprofile
