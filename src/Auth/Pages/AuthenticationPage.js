
import AuthForm from "../AuthForm";
import Navigation from "../../components/Navigation";
import classes from '../Authentication.module.css'
const AuthenticationPage = () => {

    return(
        <div className={classes.body}>
            <Navigation/>
            <AuthForm/>
        </div>
    )   
};

export default AuthenticationPage;