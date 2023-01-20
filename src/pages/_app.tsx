import '~/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { staticPath } from '~/utils/$path'
import { Amplify } from '@aws-amplify/core'
import '@aws-amplify/ui-react/styles.css'
import awsExports from '~/aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import { AuthProvider } from '~/providers/auth/AuthProvider'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

Amplify.configure(awsExports)

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  )
}

export default MyApp
