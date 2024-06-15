import classes from './AuthForm.module.css';
import { Form,Button,Row,Col } from 'react-bootstrap';

const ProfileForm = () => {
  return (
    <Form>
    
    <Form.Group as={Row} className={`${classes.control} m-auto text-center`} controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Col sm='10'>
            <Form.Control className='mx-5' type="password" placeholder="Password"/> 
        </Col> 
    </Form.Group>

    <Form.Group className={`${classes.actions} mb-3`} >
        <Button type="submit">Change Password</Button>
    </Form.Group>
  
</Form>
  );
}

export default ProfileForm;