import { useRouter } from 'next/router'
import CommonHeader from 'components/header'

const User = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <CommonHeader />
      <div className="max-w-screen-md mt-0 mb-0 mr-auto ml-auto px-7 py-8 bg-white text-gray-600 text-s">
        <h1 className="text-2xl font-bold">{`User : ${id}`}</h1>
        <ul className="my-4">
          <li>
            <span className="mr-1">Created: </span>
            3378 days ago
          </li>
          <li>
            <span className="mr-1">Karma: </span>
            898
          </li>
        </ul>
      </div>
    </div>
  )
}

export default User
