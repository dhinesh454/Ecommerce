import { useRef } from "react";
import { Form, Row,Col, Button} from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer/Footer";



const Contact = (props) => {

    const emailIdRef = useRef();  
    const phonedRef = useRef();
    const addressIdRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef(); 
    const pincodeRef = useRef();

    const contactPostHandler = async (event)=> {
        event.preventDefault();

        const email = emailIdRef.current.value;
        const phonenumber = phonedRef.current.value;
        const address = addressIdRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const pincode = pincodeRef.current.value;

        try {

            const data={email,phonenumber,address,city,state,pincode};

            const response = await fetch('https://ecommerce-5696a-default-rtdb.firebaseio.com/contact.json',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }

            });

            const contactData = await response.json();
            console.log(contactData);

            emailIdRef.current.value='';
            phonedRef.current.value='';
            addressIdRef.current.value='';
            cityRef.current.value='';
            stateRef.current.value='';
            pincodeRef.current.value='';



            
        } catch (error) {
            console.log(error)
        }
    }

    return(

        <div>

        <Navigation onshow={props.onshow}/>
      
        <Form className="m-5 p-2 fw-bold" onSubmit={contactPostHandler}>
            <h1 className="text-center m-2 p-2 fst-italic">Contact Us</h1>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailIdRef}/>
                </Form.Group>
            

                <Form.Group as={Col} controlId="formGridPhonenumber">
                    <Form.Label>Phonenumber</Form.Label>
                    <Form.Control type="number" placeholder="Phonenumber" ref={phonedRef}/>
                </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Enter Your Address" ref={addressIdRef}/>
            </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control  placeholder="City" ref={cityRef}/>
            </Form.Group>
        

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control type="state" placeholder="State" ref={stateRef}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="pincode" placeholder="PinCode" ref={pincodeRef}/>
            </Form.Group>
        </Row>

        <Button type="submit" variant="success">Submit</Button>

        
        </Form>

        <Footer/>

    </div>    
      

    )

};

export default Contact;