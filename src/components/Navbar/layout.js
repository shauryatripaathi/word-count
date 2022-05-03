import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import './index.css'
import SearchBar from "./Search/SearchBar"
import styled from 'styled-components'

export default function Layout() {
    const NavmenuList = styled.ul`
        background : #000080;
        display : flex;
        list-style-type: none;
        gap: 20px;
        padding: 15px;
        margin: 0%;
        text-decoration: none;
    `
    return (
        <div>
            <nav>
                <NavmenuList>
                    <li><Link to='/' style={{ color: 'white' }}>Home</Link></li>
                    <li><Link to='/about' style={{ color: 'white' }}>About Us</Link></li>
                    <li><SearchBar /></li>
                </NavmenuList>
            </nav>
            <Outlet />
        </div>
    )
}