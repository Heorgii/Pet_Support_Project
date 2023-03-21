import { Helmet } from "react-helmet-async";
import { NewsComp } from '../components/NewsComp/NewsComp';

const News = () => {
    return (
        <div>
            <Helmet>
                <title>News</title>
            </Helmet>
            
            <NewsComp />
        </div>
    );
}

export default News;