import { AuthContext } from '@/contexts/AuthContext'
import Head from 'next/head'
import { FormEvent, useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import styles from './auth.module.scss'

export default function Auth() {

    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()

        if(email.trim() === '') {
            return toast.error('Informe um Email válido.', {
                style: {
                    border: '1px solid #DC196F',
                    padding: '16px',
                    color: '#DC196F',
                },
                iconTheme: {
                    primary: '#DC196F',
                    secondary: '#FFFAEE',
                },
            })
        }

        if(password.trim() === '') {
            return toast.error('Informe uma senha válida.', {
                style: {
                    border: '1px solid #DC196F',
                    padding: '16px',
                    color: '#DC196F',
                },
                iconTheme: {
                    primary: '#DC196F',
                    secondary: '#FFFAEE',
                },
            })
        }

        await signIn({email, password})
    }
    return(
        <>
            <Head>
                <title>Nutribase</title>
            </Head>

            <Toaster position='bottom-right' reverseOrder={false} />

            <main className={styles.contentContainer}>
                <form onSubmit={handleLogin}>
                    <img src='/images/small-logo.svg' alt='Nutribase' />

                    <div className={styles.formContent}>
                        <h2>Acesse sua conta</h2>
                        <input
                            type='text'
                            placeholder='Email'
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Senha'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <a className={styles.forgot} href='/forgot'>Esqueci minha senha</a>
                        <input type="submit" value='Acessar' />
                        <span>Não tem uma conta? <a href='/auth/register'>Registre-se</a></span>
                    </div>
                </form>
                <span className={styles.footerText}>Copyright &copy; {new Date().getFullYear()} nutribase.</span>
            </main>
        </>
    )
}