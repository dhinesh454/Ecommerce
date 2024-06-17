import { Button, Form , Row, Col } from "react-bootstrap";
import { useState , useRef , useContext } from "react";
import classes from './AuthForm.module.css';
import CartContext from "../components/Store/CartContext";
import { useHistory } from "react-router-dom";



const AuthForm = () =>{
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(CartContext)

    const [isLogin,setIsLogin] = useState(true);
    const [isLoading,setLoading]=useState(false)
    const switchAuthModeHandler =  () => {
        setIsLogin((prevState) => !prevState);
      };

    const submitHandler = async(event) =>{
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //loading state changes to zero for loading shown in page
        setLoading(true)
       
    let url;
    if (isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTAHt77RoHE8WSdASydc4ZxR1_i8dLoNw';
    } else {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTAHt77RoHE8WSdASydc4ZxR1_i8dLoNw';
    }

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        // loading state finished set to false whether passes or failed 
        setLoading(false);

        if (res.ok) {
          
            authCtx.login(data.idToken);

            if(isLogin){
                history.replace('/') 
            } else {
                history.replace('/login');
            }
            

        } else {
            // show error modal
            let errorMessage = 'Authentication failed';
            if (data && data.error && data.error.message) {
                errorMessage = data.error.message;   
            }
           throw new Error(errorMessage)
            
        }
    } catch (err) {
        alert(`authentication failed ${err}`);
        console.log(err)
    }
};

   
return    (
    <div>

    <h1 className={classes.text}>Welcome To E-Commerce Platform</h1>

    <section className={classes.auth}>
            <h1>{isLogin?'Login':'SignUp'}</h1>
        <Form onSubmit={submitHandler}>

            <Form.Group as={Row} className={`${classes.control} mb-3`} controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Col sm='10'>
                    <Form.Control type="text" placeholder="Enter Email" ref={emailInputRef}/>  
                </Col>
                
            </Form.Group>
            
            <Form.Group as={Row} className={`${classes.control} mb-3`} controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Col sm='10'>
                    <Form.Control type="password" placeholder="Password" ref={passwordInputRef}/> 
                </Col> 
            </Form.Group>

            <Form.Group className={`${classes.actions} mb-3`} >
              {!isLoading && <Button type="submit">{isLogin ? 'Login' : 'Create Account'}</Button>}
              {isLoading && <p>Sending Request Loading....</p>}
                <Button
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </Button>
            </Form.Group>
          
        </Form>
    </section>

    </div>
 
    
)   

};

export default AuthForm;