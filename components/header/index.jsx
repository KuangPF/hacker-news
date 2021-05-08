import Link from 'next/link'

const CommonHeader = () => {
  return (
    <header className="fixed z-999 t-0 left-0 right-0 h-14 bg-color-scale-yellow-4">
      <nav className="max-w-screen-md mt-0 mb-0 mr-auto ml-auto pt-4 pb-4">
        <Link href="/">
          <img className="w-6" src="/assets/logo-48.png" />
        </Link>
      </nav>
    </header>
  )
}

export default CommonHeader
