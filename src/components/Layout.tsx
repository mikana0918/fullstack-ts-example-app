import React, { FC, ReactNode } from 'react'
import styles from '~/styles/Layout.module.scss'
import { staticPath } from '~/utils/$path'
import DefaultHeader from './DefaultHeader'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <DefaultHeader />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img
            src={staticPath.vercel_svg}
            alt="Vercel Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  )
}

export default Layout
