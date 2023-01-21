import { ChangeEvent } from 'react'
import { useAuth } from '~/hooks/useAuth'
import { apiClient } from '~/utils/apiClient'
import { Box, HStack, Input } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Settings: NextPage = () => {
  const { mutate: mutateAuthUser } = useAuth()

  const editIcon = async (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      await apiClient.users.post({ body: { file: evt.target.files[0] } })
      mutateAuthUser()
    }
  }

  return (
    <>
      <Box>
        <HStack>
          <Input type="file" accept="image/*" onChange={editIcon} />
        </HStack>
      </Box>
    </>
  )
}

export default Settings
