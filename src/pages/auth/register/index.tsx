import Head from 'next/head'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

type UserType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    companyName: string,
    occupation: string,
    workspaceName: string,
    plan: number
}

export default function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [workspaceName, setWorkspaceName] = useState('')
    const [plan, setPlan] = useState('')

    return(
        <>
            <Head>
                <title>Cadastro | Nutribase</title>
            </Head>

            <Toaster position='bottom-right' />

            <main>
                <form>
                    in
                </form>
            </main>
        </>
    )
}