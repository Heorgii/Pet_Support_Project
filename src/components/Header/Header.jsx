import { AuthNav } from "components/Header/AuthNav/AuthNav";
import { Navigation } from "components/Header/Navigation/Navigation";
// import { UserNav } from "components/UserNav/UserNav";

export const Header = () => {

    return (
        <header>
            <Navigation />
            <AuthNav />
            {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
        </header>
    );
}