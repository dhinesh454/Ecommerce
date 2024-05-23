import { useState,useEffect } from "react";
import { Button, Container,Nav,Navbar,Badge } from "react-bootstrap";
import CartContext from "./Store/CartContext";
import { useContext } from "react";
import classes from './Navigation.module.css';
import { Link } from "react-router-dom";



const Navigation = (props) =>{
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
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/home" >Home</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/store" >Store</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/about" >About</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/contact" >Contact</Nav.Link>
            </Nav>
            
            <Button variant="danger" onClick={props.onshow} className={btnClasses}>Cart   
    
              <Badge bg="light" text="dark" className={`p-1 mx-2 ${classes.cartbadge}`}>
                {CartItems}
              </Badge>
            </Button>
        </Container>
        </Navbar>

        

        </>
    )
   


}

export default Navigation;