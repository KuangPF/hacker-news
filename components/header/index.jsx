import Link from 'next/link'

const CommonHeader = () => {
  return (
    <header className="fixed z-999 t-0 left-0 right-0 h-14 bg-color-scale-yellow-4">
      <nav className="max-w-screen-md mt-0 mb-0 mr-auto ml-auto pt-4 pb-4">
        <Link href="/">
          <img className="w-6 header-link" src="/assets/logo-48.png" alt="logo" />
        </Link>
        <Link href="/top">
          <a className="header-link">Top</a>
        </Link>
        <Link href="/new">
          <a className="header-link">New</a>
        </Link>
        <Link href="/show">
          <a className="header-link">Show</a>
        </Link>
        <Link href="/ask">
          <a className="header-link">Ask</a>
        </Link>
        <Link href="/job">
          <a className="header-link">Jobs</a>
        </Link>
      </nav>
    </header>
  )
}

export default CommonHeader
