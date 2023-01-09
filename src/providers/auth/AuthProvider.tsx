import { AmplifyUser } from '@aws-amplify/ui'
import { ReactNode, createContext, useMemo } from 'react'

interface IAuthContext {
  user: AmplifyUser | undefined
  isAuthenticated: boolean
}

const initialContextState: IAuthContext = {
  user: undefined,
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
  const value = useMemo(() => {
    return {
      user,
      isAuthenticated: user !== undefined
    }
  }, [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
