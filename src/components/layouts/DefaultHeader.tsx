import styles from './DefaultHeader.module.scss'
import { AmplifyAuthModule } from '~/app/services/auth'
import { useAuth } from '~/hooks/useAuth'
import { Box, Button, HStack, Flex } from '@chakra-ui/react'

const DefaultHeader = () => {
  const { cognitoUser } = useAuth()

  const logout = async () => {
    await AmplifyAuthModule.signOut()
  }

  return (
    <Flex className={styles.userBanner} justifyContent={'flex-end'}>
      {cognitoUser ? (
        <Box>
          <HStack>
            <Button onClick={logout}>Logout</Button>
          </HStack>
        </Box>
      ) : null}
    </Flex>
  )
}

export default DefaultHeader
