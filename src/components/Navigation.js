import { useState,useEffect } from "react";
import { Button, Container,Nav,Navbar,Badge } from "react-bootstrap";
import CartContext from "./Store/CartContext";
import { useContext } from "react";
import classes from './Navigation.module.css';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



const Navigation = (props) =>{
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const Ctx = useContext(CartContext);
    const history = useHistory();

    const {items} = Ctx;

        let CartItems = Ctx.items.reduce((currNum,item)=>{
            return currNum + item.amount
        },0);

        console.log(items)

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

        const logoutHandler = () => {
          Ctx.clearCart()
          Ctx.logout();
          //optioanl i do myself next how to protect nav and routes
          history.replace('/')
        }


    return(
        <>
        <Navbar bg='dark' expand='lg' variant="dark">
        <Container >
            <Navbar.Brand>E-Commerce</Navbar.Brand>
            <Nav>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/" >Home</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/store" >Store</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/about" >About</Nav.Link>
                <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/contact" >Contact</Nav.Link>
     
            </Nav>
            
            {Ctx.isLoggedIn && <Button variant="warning" onClick={props.onshow} className={btnClasses}>Cart   
    
              <Badge bg="light" text="dark" className={`p-1 mx-2 ${classes.cartbadge}`}>
                {CartItems}
              </Badge>
            </Button>}

            <Nav>
                {!Ctx.isLoggedIn && <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/login" >Login</Nav.Link>}
                {Ctx.isLoggedIn && <Nav.Link  className="me-5 cursor-pointer" as={Link} to="/profile" >Profile</Nav.Link>}
                {Ctx.isLoggedIn && <Button variant="danger" onClick={logoutHandler}>Logout</Button>}
            </Nav>
        </Container>
        </Navbar>

        

        </>
    )
   


}

export default Navigation;