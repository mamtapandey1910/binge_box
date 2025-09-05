import Link from "next/link"

const NotFound = () => {
    return <main className="not-found" style={{ margin: 'rem' }}>
        <h1>Thanks for browsing, this page doesn't exits. Got to home page <Link href={'/'}>Home</Link></h1>
    </main>
}

export default NotFound

