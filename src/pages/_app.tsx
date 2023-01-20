import '~/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { staticPath } from '~/utils/$path'
import { Amplify } from '@aws-amplify/core'
import '@aws-amplify/ui-react/styles.css'
import awsExports from '~/aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import { AuthProvider } from '~/providers/auth/AuthProvider'

Amplify.configure(awsExports)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Authenticator>
      {({ user }) => (
        <AuthProvider user={user}>
          <Head>
            <link rel="icon" href={staticPath.favicon_png} />
          </Head>
          <Component {...pageProps} />
        </AuthProvider>
      )}
    </Authenticator>
  )
}

export default MyApp
