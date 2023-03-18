import { NoticesComp } from "components/NoticesComp/NoticesComp";
import { Helmet } from "react-helmet";

export const Notices = () => {
    return (
        <div>
            <Helmet>
                <title>Find pet</title>
            </Helmet>
            <h1>Notices / Find pet page</h1>
            <NoticesComp />
        </div>
    );
}