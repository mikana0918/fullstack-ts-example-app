import { ReactNode, createContext } from 'react'
import type { User } from '$/types'
import useAspidaSWR from '@aspida/swr'
import type { KeyedMutator } from 'swr'
import { apiClient } from '~/utils/apiClient'
import { AmplifyUser } from '@aws-amplify/ui'

interface IAuthContext {
  user: User | null | undefined
  cognitoUser: AmplifyUser | undefined
  isAuthenticated: boolean
  mutate: KeyedMutator<User | null>
}

const initialContextState: IAuthContext = {
  user: null,
  cognitoUser: undefined,
  isAuthenticated: false,
  mutate: async () => null
}

export const AuthContext = createContext<IAuthContext>(initialContextState)

interface Props {
  children: ReactNode
  user: AmplifyUser | undefined
}

/**
 * AuthProvider provides user auth global states
 */
export const AuthProvider = ({ children, user }: Props) => {
  const { data: authUser, error, mutate } = useAspidaSWR(apiClient.users.me)

  const value = {
    isAuthenticated: Boolean(user) && Boolean(authUser) && !error,
    user: authUser,
    cognitoUser: user,
    mutate
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
