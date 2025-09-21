import { useState, useEffect } from "react"

export const devicePairing = () => {
    const [userCode, setUserCode] = useState('')
    const [isBrowser, setIsBrowser] = useState<boolean | null>(null)

    useEffect(() => {
        const getLoginCode = async () => {
            const response = await fetch('/api/device-pairing')
            const codeData = await response.json()
            const checkdevice = navigator.userAgent.toLocaleLowerCase().includes('chrome')
            setIsBrowser(checkdevice)
            setUserCode(codeData.userCode)
        }
        getLoginCode()
    }, [])

    return (
        <div style={{ marginTop: '4rem' }}>
            <p style={{ textAlign: 'center', fontSize: '50px' }}> {userCode}</p>
            <p style={{ textAlign: 'center' }}> Please go to /activate/page enter the code</p>
        </div>
    )
}