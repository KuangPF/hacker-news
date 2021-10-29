// item
import { timeAgo, getHost } from 'utils'
import Link from 'next/link'

const Item = props => {
  const { item = {} } = props
  return (
    <div className="flex items-center p-5 pl-0 bg-white border-b border-gray-200 border-solid">
      <div className="font-bold text-hacker-news-base text-xl w-20 text-center text-color-scale-yellow-4">{item.score}</div>
      <div className="ml-5">
        <span>
          <a href={item.url} className="text-gray-700 _blank">
            {item.title}
          </a>
          {item.url && <span className="ml-2 text-sm text-gray-500">{`(${getHost(item.url)})`}</span>}
        </span>
        <br />
        <span className="text-gray-500 text-sm">
          <span>
            by
            <Link href={`/user/${item.by}`}>
              <span className="ml-1 underline cursor-pointer hover:text-hacker-news-base transition-all ease-in duration-100">
                {item.by}
              </span>
            </Link>
          </span>
          <span className="ml-2">{`${timeAgo(item.time)} ago`}</span>
          <span className="ml-2">
            |
            <a className="ml-1 underline cursor-pointer hover:text-hacker-news-base transition-all ease-in duration-100">
              {`${item.descendants}comments`}
            </a>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Item
