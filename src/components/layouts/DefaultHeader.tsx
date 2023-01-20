import { useState, ChangeEvent, useMemo } from 'react'
import styles from './DefaultHeader.module.scss'
import Link from 'next/link'
import { pagesPath } from '~/utils/$path'
import { useRouter } from 'next/router'
import { AmplifyAuthModule } from '~/app/services/auth'
import { useAuth } from '~/hooks/useAuth'
import { apiClient } from '~/utils/apiClient'
import { Box, Button, FormControl, HStack, Input } from '@chakra-ui/react'

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
    <Box>
      <Box className={styles.userBanner}>
        <Box>
          <Link href={pagesPath.$url()} className={styles.nav}>
            Home
          </Link>
          <Link href={pagesPath.article.$url()} className={styles.nav}>
            Article
          </Link>
        </Box>
        <HStack>
          <Box>
            <FormControl
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
              <HStack>
                <Input
                  type="text"
                  name="query"
                  onInput={(e) =>
                    e.target instanceof HTMLInputElement &&
                    setSearch(e.target.value)
                  }
                />
                <Button type="submit">search</Button>
              </HStack>
            </FormControl>
          </Box>
        </HStack>
        <HStack>
          {cognitoUser ? (
            <Box>
              <HStack>
                <img src={userIconPath} className={styles.userIcon} />
                <span>{'TODO: NAME'}</span>
                <Input type="file" accept="image/*" onChange={editIcon} />
                <Button onClick={logout}>Logout</Button>
              </HStack>
            </Box>
          ) : null}
        </HStack>
      </Box>
    </Box>
  )
}

export default DefaultHeader
