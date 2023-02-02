import { createContext } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'

import { SignInRequest } from '@/services/auth';

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
    const isAuthenticated = false

    async function signIn({ email, password }: SignInData) {
        const { token } = await SignInRequest({
            email,
            password
        })

        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 60 * 60 * 1, //1 hour
        })

        Router.push('/dashboard')
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, signIn}}>
            { children }
        </AuthContext.Provider>
    )
}