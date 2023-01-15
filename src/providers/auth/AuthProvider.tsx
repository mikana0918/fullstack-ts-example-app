import { ReactNode, createContext } from 'react'
import type { User } from '$/types'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import { AmplifyUser } from '@aws-amplify/ui'

interface IAuthContext {
  user: User | null | undefined
  isAuthenticated: boolean
}

const initialContextState: IAuthContext = {
  user: null,
  isAuthenticated: false
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
  const { data: authUser, error } = useAspidaSWR(
    apiClient.users._userId(user?.getUsername() ?? 'USER_NOT_SET')
  )

  const value = {
    isAuthenticated: Boolean(user) && Boolean(authUser) && !error,
    user: authUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}