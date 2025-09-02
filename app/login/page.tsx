
const Login = async () => {
    try {

        const response = await fetch('http://127.0.0.1:8000/user/login', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "email": "mamta@gmail.com",
                "password": "12345678"
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }

    return (
        <div style={{ marginTop: '4rem' }}>
            <h1>Hello I am login page</h1>
        </div>
    )
}


export default Login