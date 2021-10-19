import { useRouter } from 'next/router'
import CommonHeader from 'components/header'

const User = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <CommonHeader />
      <div>{id}</div>
    </div>
  )
}

export default User
