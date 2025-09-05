const Register = async () => {
    const data = await fetch('http://127.0.0.1:8000/user/register')
    console.log(data)
    return (<>
        <div>
            <h1>Hello I am a Register page</h1>
        </div>

    </>)
}

export default Register