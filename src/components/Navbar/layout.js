import { Outlet } from "react-router"
import { Link } from "react-router-dom"

export default function Layout(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About Us</Link>
                    </li>
                    <li>
                        Search
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}