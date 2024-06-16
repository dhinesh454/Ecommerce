import { useContext, useRef } from 'react';
import classes from './AuthForm.module.css';
import { Form,Button,Row,Col } from 'react-bootstrap';
import CartContext from '../components/Store/CartContext';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const Ctx = useContext(CartContext);
  const history = useHistory();
  const newPasswordInputRef = useRef();

      const updatePasswordHandler = async(event) => {
        event.preventDefault();
        const enteredNewPassword = newPasswordInputRef.current.value;

    try {
          const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBTAHt77RoHE8WSdASydc4ZxR1_i8dLoNw',{
            method:'POST',
            body:JSON.stringify({
              idToken:Ctx.token,
              password:enteredNewPassword,
              returnSecureToken:false
            }),
            headers:{
             'Content-Type':'application/json'
            }
          })

          const data = await res.json();
          if(res.ok){
            alert('Successfully Changed Login!..');
            history.replace('/');
          }
          else{
            console.log(data,data.error.message);
            throw new Error(data.error.message);
          
          }


    } catch (error) {
          alert(error);
          console.log(error)
    }

      }


  return (
    <Form onSubmit={updatePasswordHandler}>
    
    <Form.Group as={Row} className={`${classes.control} m-auto text-center`} controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Col sm='10'>
            <Form.Control className='mx-5' type="password" placeholder="Password" minLength="7" ref={newPasswordInputRef}/> 
        </Col> 
    </Form.Group>

    <Form.Group className={`${classes.actions} mb-3`} >
        <Button type="submit">Change Password</Button>
    </Form.Group>
  
</Form>
  );
}

export default ProfileForm;