import { ChangeEvent } from 'react'
import styles from './DefaultHeader.module.scss'
import { AmplifyAuthModule } from '~/app/services/auth'
import { useAuth } from '~/hooks/useAuth'
import { apiClient } from '~/utils/apiClient'
import { Box, Button, HStack, Input } from '@chakra-ui/react'

const DefaultHeader = () => {
  const { cognitoUser, mutate: mutateAuthUser } = useAuth()

  const editIcon = async (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      await apiClient.users.post({ body: { file: evt.target.files[0] } })
      mutateAuthUser()
    }
  }

  const logout = async () => {
    await AmplifyAuthModule.signOut()
  }

  return (
    <Box>
      <Box className={styles.userBanner}>
        <HStack>
          {cognitoUser ? (
            <Box>
              <HStack>
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
