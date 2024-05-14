
import { Button, Container,Nav,Navbar } from "react-bootstrap";

const Navigation = (props) =>{
    return(
        <>
        <Navbar bg='dark' expand='lg' variant="dark">
        <Container >
            <Navbar.Brand href='/'>E-Commerce</Navbar.Brand>
            <Nav>
                <Nav.Link href="#" className="me-5">Home</Nav.Link>
                <Nav.Link href="#" className="me-5">Store</Nav.Link>
                <Nav.Link href="#" className="me-5">About</Nav.Link>
            </Nav>
            
            <Button variant="danger" onClick={props.onshow}>Cart<span className="p-2">0</span></Button>
        </Container>
        </Navbar>

        

        </>
    )
   


}

export default Navigation;