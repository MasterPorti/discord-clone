import React from 'react'
import Layaout from '../../components/layaout'
import { useRouter } from 'next/router'
import { data } from '../../api/data'
function Chat (props) {
  const router = useRouter()
  const user = findObjectById(router.query.user)
  return (
    <Layaout>
      {user.name}
    </Layaout>
  )
}

function findObjectById (id) {
  return data.find(obj => obj.id === id) || null
}

export default Chat
