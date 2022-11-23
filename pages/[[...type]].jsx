import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CommonHeader from 'components/header'
// import Link from 'next/link'
import { fetchListData } from 'store/actions'
import { useRouter } from 'next/router'
import Item from 'components/item'
import Loading from 'components/loading'

const itemsPerPage = 20

export default function Home() {
  const { activeType, ids, items, apiLoading } = useSelector(_state => _state)
  const dispatch = useDispatch()
  const {
    query: { type = [] }
  } = useRouter()

  const page = type[1] || 1

  // displayedItems
  const getdDisplayedItems = useCallback(() => {
    if (!activeType || !ids[activeType]) {
      return []
    }
    const start = (page - 1) * itemsPerPage
    const end = page * itemsPerPage
    const avtiveIds = ids[activeType].slice(start, end)
    return avtiveIds.map(id => items[id]).filter(_ => _)
  }, [activeType, ids, page, items])

  // console.log(getdDisplayedItems())

  useEffect(() => {
    if (type[0]) {
      dispatch(fetchListData(type[0], page))
    }
  }, [dispatch, type, page])

  const displayedItems = getdDisplayedItems()
  return (
    <div>
      <CommonHeader pathname={`/${type.join('/')}`} />
      <div className="news-view relative max-w-screen-md mt-0 mb-0 mr-auto ml-auto">
        <div className="news-list-nav hidden fixed z-10 top-14 left-0 right-0 px-8 py-3.5 bg-white text-center text-sm shadow">
          {/* <Link href="/">
            <a className="mx-4">&lt; prev</a>
          </Link>
          <span>2/2</span>
          <Link href="/">
            <a className="mx-4">more &gt;</a>
          </Link> */}
        </div>
        {apiLoading ? (
          <div className="mt-5 text-center">
            <Loading />
          </div>
        ) : (
          <div className="new-list my-8 w-full bg-white rounded">
            {displayedItems.map(item => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
