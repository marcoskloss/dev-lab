import { createContext, ReactNode, useEffect, useState } from "react"
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { api } from "../services/api"

interface User {
  email: string
  permissions: string[]
  roles: string[]
}

interface AuthContextProps {
  children: ReactNode
}

interface SignInCredentials {
  password: string
  email: string
}
 
interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>
  user?: User
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      api.get('/me').then(response => {
        const { email, permissions, roles } = response.data
        setUser({ email, roles, permissions })
      })
    }
  }, [])
  
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email, 
        password
      })  

      const { token, refreshToken, permissions, roles } = response.data

      setUser({
        email,
        permissions,
        roles
      })

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })
      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      signIn,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}