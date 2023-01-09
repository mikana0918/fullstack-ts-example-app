import { useState } from 'react'
import styles from './DefaultHeader.module.css'
import type { UserInfo } from '$/types'
import Link from 'next/link'
import { pagesPath } from '~/utils/$path'
import { useRouter } from 'next/router'
import { AmplifyAuthModule } from '~/app/services/auth'
import { getLastAuthUser } from '~/utils/localStorageClient'

const DefaultHeader = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [userInfo, setUserInfo] = useState({} as UserInfo)

  const isLoggedIn = getLastAuthUser() !== null

  const editIcon = () => {
    console.log('edit icon')
  }

  const logout = async () => {
    await AmplifyAuthModule.signOut()
  }

  return (
    <div>
      <div className={styles.userBanner}>
        <div>
          <Link href={pagesPath.$url()} className={styles.nav}>
            Home
          </Link>
          <Link href={pagesPath.article.$url()} className={styles.nav}>
            Article
          </Link>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            router.push(
              pagesPath.article.$url({
                query: {
                  search
                }
              })
            )
          }}
        >
          <input
            type="text"
            name="query"
            onInput={(e) =>
              e.target instanceof HTMLInputElement && setSearch(e.target.value)
            }
          />
          <button type="submit">search</button>
        </form>
        <div className={styles.spacing} />
        <div>
          {isLoggedIn ? (
            <>
              <img src={userInfo.icon} className={styles.userIcon} />
              <span>{userInfo.name}</span>
              <input type="file" accept="image/*" onChange={editIcon} />
              <button onClick={logout}>LOGOUT</button>
            </>
          ) : null}
        </div>
      </div>
      <div className={styles.padding} />
    </div>
  )
}

export default DefaultHeader
