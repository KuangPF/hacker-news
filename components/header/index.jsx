import { useCallback } from 'react'
import Link from 'next/link'

const CommonHeader = props => {
  const { pathname } = props
  const getLinkClass = useCallback(type => `header-link ${pathname === type ? 'header-link-active' : ''}`, [pathname])

  return (
    <header className="fixed z-20 t-0 left-0 right-0 h-14 bg-color-scale-yellow-4">
      <nav className="max-w-screen-md mt-0 mb-0 mr-auto ml-auto pt-4 pb-4">
        <Link href="/top">
          <a>
            <img className="w-6 header-link" src="/assets/logo-48.png" alt="logo" />
          </a>
        </Link>
        <Link href="/top">
          <a className={getLinkClass('/top')}>Top</a>
        </Link>
        <Link href="/new">
          <a className={getLinkClass('/new')}>New</a>
        </Link>
        <Link href="/show">
          <a className={getLinkClass('/show')}>Show</a>
        </Link>
        <Link href="/ask">
          <a className={getLinkClass('/ask')}>Ask</a>
        </Link>
        <Link href="/job">
          <a className={getLinkClass('/job')}>Jobs</a>
        </Link>
      </nav>
    </header>
  )
}

export default CommonHeader
