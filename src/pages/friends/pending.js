import FriendsMenu from '@/components/friendsMenu'
import Layaout from '@/components/layaout'
import styles from '../../styles/Home.module.scss'
import EmptyContent from '../../components/emptyContent'
import pending from '../../../public/online.svg'
import NoActive from '../../components/noActive'
export default function Pending () {
  return (
    <Layaout>
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
