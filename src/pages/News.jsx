import { Helmet } from "react-helmet";
import { NewsComp } from '../components/NewsComp/NewsComp';

const News = () => {
    return (
        <div>
            <Helmet>
                <title>News</title>
            </Helmet>
            <h1>News</h1>
            <NewsComp />
        </div>
    );
}

export default News;