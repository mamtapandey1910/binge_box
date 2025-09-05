export const GET = async (req: any) => {

    const deviceCode = Math.random().toString(36).substring(2, 15)
    const userCode = Math.random().toString(26).substring(2, 8)
    const code = {
        deviceCode,
        userCode,
        expireAt: new Date(Date.now() + 5 * 60 * 1000)
    }
    console.log(code)
    return new Response(JSON.stringify(code), {
        status: 200,
        headers: { 'Content-type': 'application/json' }
    })
}