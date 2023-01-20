import { useState, ChangeEvent, useMemo } from 'react'
import styles from './DefaultHeader.module.scss'
import Link from 'next/link'
import { pagesPath } from '~/utils/$path'
import { useRouter } from 'next/router'
import { AmplifyAuthModule } from '~/app/services/auth'
import { useAuth } from '~/hooks/useAuth'
import { apiClient } from '~/utils/apiClient'

const DEFAULT_USER_ICON_PATH =
  'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-16.jpg'

const DefaultHeader = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const { user, cognitoUser, mutate: mutateAuthUser } = useAuth()

  const editIcon = async (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      await apiClient.users.post({ body: { file: evt.target.files[0] } })
      mutateAuthUser()
    }
  }

  const logout = async () => {
    await AmplifyAuthModule.signOut()
  }

  const userIconPath = useMemo(() => {
    return user?.icon_path
      ? `${process.env.NEXT_PUBLIC_ASSET_ORIGIN_URL}/${user.icon_path}`
      : DEFAULT_USER_ICON_PATH
  }, [user])

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
          {cognitoUser ? (
            <>
              <img src={userIconPath} className={styles.userIcon} />
              <span>{'TODO: Add name column'}</span>
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
