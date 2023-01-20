import React, { FC, ReactNode } from 'react'
import styles from '~/styles/Layout.module.scss'
import DefaultHeader from '~/components/layouts/DefaultHeader'
import { Box, Flex, VStack } from '@chakra-ui/react'
import DefaultSidebar from '~/components/layouts/DefaultSidebar'
type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Flex w="100vw">
      <DefaultSidebar />
      <DefaultHeader />
      <main className={styles.main}>
        <Flex>
          <Box w="30%"></Box>
          <Box w="70%">{children}</Box>
        </Flex>
      </main>
    </Flex>
  )
}

export default Layout
