import RegisterForm from "components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet-async";

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}

export default Register;
