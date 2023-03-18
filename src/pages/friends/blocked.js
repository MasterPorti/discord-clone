import FriendsMenu from '@/components/friendsMenu'
import Layaout from '@/components/layaout'
import styles from '../../styles/Home.module.scss'
import EmptyContent from '../../components/emptyContent'
import block from '../../../public/block.svg'
import NoActive from '../../components/noActive'
export default function Pending () {
  return (
    <Layaout>
      <FriendsMenu />
      <div className={styles.container}>
        <EmptyContent picture={block}>
          No puedes desbloquear a Wumpus.
        </EmptyContent>
        <main>
          <NoActive />
        </main>
      </div>
    </Layaout>
  )
}
