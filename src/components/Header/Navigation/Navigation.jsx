import { NavLink } from "react-router-dom"
import { AuthNav } from "../AuthNav/AuthNav"
import { UserNav } from "../UserNav/UserNav"

export const Navigation = () => {
    <nav>
        <NavLink to="/news">
            News
        </NavLink>
        
        <AuthNav />
        <UserNav />
    </nav>
}