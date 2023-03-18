import { Helmet } from "react-helmet";
import { OurFriendsComp } from "components/OurFriendsComp/OurFriendsComp";

export const OurFriends = () => {
    return (
        <div>
            <Helmet>
                <title>OurFriends</title>
            </Helmet>
            <OurFriendsComp />
        </div>
    );
}