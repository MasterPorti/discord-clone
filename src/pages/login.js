import { signIn, getSession } from 'next-auth/react'

function Login (props) {
  return (
    <div>
      <button onClick={() => signIn('github')}>
        Iniciar Con GITHUB
      </button>
      <button onClick={() => signIn('google')}>
        Iniciar Con Google
      </button>
    </div>
  )
}

export default Login

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      }
    }
  }
  return {
    props: {

    }
  }
}
