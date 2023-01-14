import { useState, ChangeEvent } from 'react'
import styles from './DefaultHeader.module.css'
import Link from 'next/link'
import { pagesPath } from '~/utils/$path'
import { useRouter } from 'next/router'
import { AmplifyAuthModule } from '~/app/services/auth'
import { useAuth } from '~/hooks/useAuth'
import { apiClient } from '~/utils/apiClient'

const DefaultHeader = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const { user } = useAuth()

  const editIcon = async (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      await apiClient.users.post({ body: { file: evt.target.files[0] } })
    }
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
          {user ? (
            <>
              <img
                src={
                  user.icon_path ??
                  'https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-16.jpg'
                }
                className={styles.userIcon}
              />
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
