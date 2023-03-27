import Layaout from '../../components/layaout'
import { useRouter } from 'next/router'
import { data } from '../../api/data'
import ChatMenu from '@/components/chatMenu'
import NoActive from '@/components/noActive'
import styles from '../../styles/Home.module.scss'
import MainContent from '@/components/mainContent'
import { getSession } from 'next-auth/react'

function Chat ({ session }) {
  const router = useRouter()
  const user = findObjectById(router.query.user)
  return (
    <Layaout session={session} title={`Discord | @${user.name}`}>
      {
      user &&
        <ChatMenu user={user} />
      }
      <div className={styles.container}>
        {
      user &&
        <MainContent user={user} session={session} />
        }
        <NoActive />
      </div>
    </Layaout>
  )
}

function findObjectById (id) {
  return data.find(obj => obj.id === id)
}

export default Chat

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props: {
      session
    }
  }
}
