import FriendsMenu from '@/components/friendsMenu'
import Layaout from '@/components/layaout'
import styles from '../../styles/Home.module.scss'
import EmptyContent from '../../components/emptyContent'
import pending from '../../../public/online.svg'
import NoActive from '../../components/noActive'
import { getSession } from 'next-auth/react'
export default function Pending ({ session }) {
  return (
    <Layaout session={session} title='Discord | pending'>
      <FriendsMenu />
      <div className={styles.container}>
        <EmptyContent picture={pending}>
          No hay solicitudes de amistad pendientes. Aquí tienes a Wumpus por ahora.
        </EmptyContent>
        <main>
          <NoActive />
        </main>
      </div>
    </Layaout>
  )
}
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
