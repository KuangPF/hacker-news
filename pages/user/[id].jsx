import { useEffect } from 'react'
import { useRouter } from 'next/router'
import CommonHeader from 'components/header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from 'store/actions'
import { timeAgo } from 'utils'

const User = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { users } = useSelector(_state => _state)
  const { id } = router.query

  useEffect(() => {
    if (id) {
      dispatch(fetchUserData(id))
    }
  }, [id, dispatch])

  const { karma = '', created = '' } = users[id] || {}
  return (
    <div>
      <CommonHeader />
      <div className="max-w-screen-md mt-0 mb-0 mr-auto ml-auto px-7 py-8 bg-white text-gray-600 text-s">
        <h1 className="text-2xl font-bold">{`User : ${id}`}</h1>
        <ul className="my-4">
          <li>
            <span className="mr-1">Created: </span>
            {`${timeAgo(created)} ago`}
          </li>
          <li>
            <span className="mr-1">Karma: </span>
            {karma}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default User
