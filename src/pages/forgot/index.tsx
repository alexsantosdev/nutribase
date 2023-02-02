import Head from 'next/head'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import styles from './forgot.module.scss'

export default function Forgot() {

    const [email, setEmail] = useState('')

    const handleRecover = (e: FormEvent) => {
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
    }

    return(
        <>
            <Head>
                <title>Recuperar senha | Nutribase</title>
            </Head>

            <Toaster position='bottom-right' reverseOrder={false} />

            <main className={styles.contentContainer}>
                <form onSubmit={handleRecover}>
                    <h2>Esqueceu a senha?</h2>
                    <span>Não tem problema, informe seu email para enviarmos uma senha temporária. Não se esqueça de trocar a senha após o acesso.</span>
                    <input type="text" placeholder="Email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="submit" value='Recuperar' />
                    <a href='/auth'>Voltar</a>
                </form>
                <span className={styles.footerText}>Copyright &copy; {new Date().getFullYear()} nutribase.</span>
            </main>
        </>
    )
}