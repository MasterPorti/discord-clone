
import FriendsMenu from '@/components/friendsMenu'
import Layaout from '@/components/layaout'
import styles from '../styles/Home.module.scss'
import online from '../../public/online.svg'
import NoActive from '@/components/noActive'
import EmptyContent from '@/components/emptyContent'

export default function Home () {
  return (
    <Layaout>
      <FriendsMenu />
      <div className={styles.container}>
        <EmptyContent picture={online}>
          No hay nadie por aquí para jugar con Wumpus.
        </EmptyContent>
        <main>
          <NoActive />
        </main>
      </div>
    </Layaout>
  )
}
