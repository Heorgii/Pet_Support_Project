import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
// import { UserNav } from "components/UserNav/UserNav";

export const AppBar = () => {

    return (
        <header>
            <Navigation />
            <AuthNav />
            {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
        </header>
    );
}