'use client'
import { useEffect, useState } from 'react'
import cssClass from './page.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userCode, setUserCode] = useState('')
    const [isBrowser, setIsBrowser] = useState<boolean | null>(null)

    const Router = useRouter()

    // console.log('mydevice', navigator.userAgent)


    useEffect(() => {
        const getLoginCode = async () => {
            const response = await fetch('/api/device-pairing')
            const codeData = await response.json()
            const checkdevice = navigator.userAgent.toLocaleLowerCase().includes('chrome')
            setIsBrowser(checkdevice)
            setUserCode(codeData.userCode)
            // console.log('devicepairing data', codeData)
        }
        getLoginCode()
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const response = await fetch('http://127.0.0.1:8000/user/login', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    "email": username,
                    "password": password
                })
            })
            const data = await response.json()
            if (data?.status === 200) {
                Router.push('/')
            }
        } catch (err) {
            throw err
        }
    }

    if (isBrowser === null) return <p>Loading</p>

    return (
        isBrowser ?
            <div style={{ marginTop: '4rem' }}>
                <p style={{ textAlign: 'center', fontSize: '50px' }}> {userCode}</p>
                <p style={{ textAlign: 'center' }}> Please go to /activate/page enter the code</p>
            </div>
            :
            <div style={{ marginTop: '4rem' }}>
                <div className={cssClass.formDiv}>
                    <form onSubmit={handleSubmit} className={cssClass.form}>
                        <input type="text" id="email" placeholder="Email address or mobile Number" className={cssClass.inputClass} value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" id="password" placeholder="Password" className={cssClass.inputClass} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className={cssClass.submitButton}>Sign In</button>
                    </form>
                    <div className={cssClass.register}>
                        New to netflix? <Link href={'/register'}>Sign up now</Link>
                    </div>
                </div>
            </div>


    )

}


export default Login