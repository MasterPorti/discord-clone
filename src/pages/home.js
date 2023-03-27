
import FriendsMenu from '@/components/friendsMenu'
import Layaout from '@/components/layaout'
import styles from '../styles/Home.module.scss'
import online from '../../public/online.svg'
import NoActive from '@/components/noActive'
import EmptyContent from '@/components/emptyContent'
import { getSession } from 'next-auth/react'

export default function Home ({ session }) {
  console.log(session)
  return (
    <Layaout session={session} title='Discord | Friends'>
      <FriendsMenu />
      <div className={styles.container}>
        <EmptyContent picture={online}>
          No hay nadie por aquí para jugar con Wumpus.
        </EmptyContent>

        <NoActive />

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
