import { Helmet } from "react-helmet";
import  Register  from "../components/RegisterForm/RegisterForm"

export const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1>Home page</h1>
            <Register/>
        </div>
    );
}