import CommonHeader from 'components/header'
import { useRouter } from 'next/router'

export default function Home() {
  const {
    query: { type = [] }
  } = useRouter()
  return (
    <div>
      <CommonHeader pathname={`/${type.join('/')}`} />
    </div>
  )
}
