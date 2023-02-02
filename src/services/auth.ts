import axios from 'axios'

type SignInRequestData = {
    email: string;
    password: string;
}

type SignInResponseData = {
    token: string;
}

export async function SignInRequest(data: SignInRequestData) {

    const api = axios.create({ baseURL: 'http://localhost:8080' })
    const token = await api.post('/api/v1/auth', data)
        .then(res => {
            const response: SignInResponseData = res.data ?? {}
            return response
        })

    return token
}