import FriendsMenu from '@/components/friendsMenu'
import Layaout from '@/components/layaout'
import { getSession } from 'next-auth/react'
export default function Add ({ session }) {
  return (
    <Layaout session={session} title='Discord | add'>
      <FriendsMenu />
      Add Friends
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
