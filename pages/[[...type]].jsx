import CommonHeader from 'components/header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Item from 'components/item'

export default function Home() {
  const {
    query: { type = [] }
  } = useRouter()

  return (
    <div>
      <CommonHeader pathname={`/${type.join('/')}`} />
      <div className="news-view relative max-w-screen-md mt-0 mb-0 mr-auto ml-auto pt-11">
        <div className="news-list-nav fixed z-10 top-14 left-0 right-0 px-8 py-3.5 bg-white text-center text-sm shadow">
          <Link href="/">
            <a className="mx-4">&lt; prev</a>
          </Link>
          <span>2/2</span>
          <Link href="/">
            <a className="mx-4">more &gt;</a>
          </Link>
        </div>
        <div className="new-list absolute my-8 w-full bg-white rounded">
          <Item />
        </div>
      </div>
    </div>
  )
}
