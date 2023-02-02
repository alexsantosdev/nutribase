import { useRouter } from 'next/router'

import { Header } from '@/components/Header'
import { AuthProvider } from '@/contexts/AuthContext'

import type { AppProps } from 'next/app'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {

  const { asPath } = useRouter()

  return (
    <AuthProvider>
      {asPath !== '/auth' && asPath !== '/auth/register' && asPath !== '/forgot' && <Header />}
      <Component {...pageProps} />
    </AuthProvider>
  )
}
