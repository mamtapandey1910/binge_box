import Link from "next/link"
import logo from '@/static/netflix-3.svg'
import mynavbar from './navbar.module.css'

export const Navbar = () => {
    return (
        <div className={mynavbar.mainDiv}>
            <div>


                <ul className={mynavbar.ul}>
                    {/* {/* <li><Link to='#home'>Home</Link></li> */}
                    <li style={{ boxSizing: 'content-box', overflow: 'hidden', height: '100%' }}>
                        <img
                            src={logo.src}
                            alt="logo"
                            width={120}
                            height={30}
                            style={{ height: '100 % ' }}
                        />
                    </li>
                    <li><Link href='/'>Home</Link></li>
                    <li><a href="#tvshows">TV Shows</a></li>
                    <li><a href='#movies'>Movies</a></li>
                    <li><a href='#games'>Games</a></li>
                    <li><a href='#mylist'>My List</a></li>
                </ul>
            </div>
            <div style={{ width: '100px', textAlign: 'right', color: 'white', marginRight: '10px', marginTop: '0px' }}>

                <Link href="/login">Sign In</Link>
            </div>
        </div>
    )

}