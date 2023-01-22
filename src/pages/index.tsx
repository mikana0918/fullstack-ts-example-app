import type { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import { Box, Heading } from '@chakra-ui/react'
import { useAuth } from '~/hooks/useAuth'

const Home: NextPage = () => {
  useNextHeadMutation('トップ')

  const { user } = useAuth()

  return (
    <>
      <Heading>Welcome!</Heading>
      <Box>Hello! {user?.user_name}</Box>
    </>
  )
}

export default Home
