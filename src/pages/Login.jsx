import { LoginForm } from "components/LoginForm/LoginForm";
import { Helmet } from "react-helmet-async";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <LoginForm />
        </div>
    );
}

export default Login;