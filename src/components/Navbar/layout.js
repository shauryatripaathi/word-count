import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import './index.css'
import SearchBar from "./Search/SearchBar"

export default function Layout() {
    return (
        <div>
            <nav>
                <ul className="navbarMenu">
                    <li><Link to='/' style={{ color: 'white' }}>Home</Link></li>
                    <li><Link to='/about' style={{ color: 'white' }}>About Us</Link></li>
                    <li><SearchBar /></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}