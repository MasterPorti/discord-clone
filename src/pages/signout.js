import { signOut, getSession } from 'next-auth/react'

function logOut () {
  signOut()
  localStorage.clear()
}

function Login (props) {
  return (
    <div>
      <button onClick={() => logOut()}>
        Cerrar Sesión
      </button>
    </div>
  )
}

export default Login

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {

    }
  }
}
