import { UserComp } from "components/UserComp/UserComp";
import { Helmet } from "react-helmet";

export const User = () => {
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <h1>Profile</h1>
            <UserComp />
        </div>
    );
}