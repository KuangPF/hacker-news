import { useEffect } from 'react'
import { useRouter } from 'next/router'
import CommonHeader from 'components/header'
import Loading from 'components/loading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from 'store/actions'
import { timeAgo } from 'utils'

const User = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { users, apiLoading } = useSelector(_state => _state)
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
      {apiLoading || !users[id] ? (
        <div className="mt-5 text-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-screen-md mt-0 mb-0 mr-auto ml-auto px-7 py-8 bg-white text-gray-600 text-s">
          <h1 className="text-2xl font-bold">{`User : ${id}`}</h1>
          <ul className="my-3">
            <li>
              <span className="mr-1">Created: </span>
              {`${timeAgo(created)} ago`}
            </li>
            <li>
              <span className="mr-1">Karma: </span>
              {karma}
            </li>
          </ul>
          <p className="my-1">
            <a className="underline" href={`https://news.ycombinator.com/submitted?id=${id}`}>
              submissions
            </a>
            <span className="mx-2">|</span>
            <a className="underline" href={`https://news.ycombinator.com/threads?id=${id}`}>
              comments
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default User
