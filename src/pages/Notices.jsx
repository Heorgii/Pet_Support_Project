import { NoticesComp } from "components/NoticesComp/NoticesComp";
import { Helmet } from "react-helmet";

export const Notices = () => {
    return (
        <div>
            <Helmet>
                <title>Find pet</title>
            </Helmet>
            <NoticesComp />
        </div>
    );
}