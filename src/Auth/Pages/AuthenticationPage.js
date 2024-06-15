
import AuthForm from "../AuthForm";
import AuthNavigation from "../AuthNavigation";
import classes from '../Authentication.module.css'
const AuthenticationPage = () => {

    return(
        <div className={classes.body}>
            <AuthNavigation/>
            <AuthForm/>
        </div>
    )   
};

export default AuthenticationPage;