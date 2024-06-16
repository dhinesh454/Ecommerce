
import { Button, Container,Nav,Navbar,Badge } from "react-bootstrap";
import { useContext,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../components/Store/CartContext";
import classes from './AuthNavigation.module.css'



const AuthNavigation = (props) =>{

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

        let CartItems = cartCtx.items.reduce((currNum,item)=>{
            return currNum + item.amount
        },0);

        const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

        useEffect(() => {
          if (items.length === 0) {
            return;
          }
          setBtnIsHighlighted(true);
      
          const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
          }, 300);
      
          return () => {
            clearTimeout(timer);
          };
        }, [items]);

    return(
        <>
        <Navbar bg='dark' expand='lg' variant="dark">
        <Container >
            <Navbar.Brand as={Link} to="/" >E-Commerce</Navbar.Brand>
            <Nav>
            <Button variant="danger" onClick={props.onshow} className={btnClasses}>Cart   
    
            <Badge bg="light" text="dark" className={`p-1 mx-2 ${classes.cartbadge}`}>
              {CartItems}
            </Badge>
          </Button>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/" >Home</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/store" >Store</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/about" >About</Nav.Link>
               
            </Nav>

            
            
        </Container>
        </Navbar>

        

        </>
    )
   


}

export default AuthNavigation;