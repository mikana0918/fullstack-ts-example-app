import React, { FC, ReactNode } from 'react'
import styles from '~/styles/Layout.module.scss'
import DefaultHeader from '~/components/layouts/DefaultHeader'
import { Box, Flex } from '@chakra-ui/react'
import DefaultSidebar from '~/components/layouts/DefaultSidebar'
import PageHead from '~/components/Base/PageHead'

type LayoutProps = {
  title: string
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <Flex w="100vw">
      <DefaultSidebar />
      <DefaultHeader />
      <main className={styles.main}>
        <PageHead title={`${title} | fullstack-ts-example-app`} />
        <Flex>
          <Box w="30%"></Box>
          <Box w="70%">{children}</Box>
        </Flex>
      </main>
    </Flex>
  )
}

export default Layout
