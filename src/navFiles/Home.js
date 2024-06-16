
import { Button ,Container} from "react-bootstrap";
import Navigation from "../components/Navigation";
import {FaPlay} from 'react-icons/fa'
import Footer from "../components/Footer/Footer";
import classes from './Home.module.css';
import HomeSection from "./HomeSection";


const Home  = (props) => {


    return (
        <div>
        <Navigation onshow={props.onshow}/>
        <Container fluid style={{backgroundColor:"lightgray"}}  className={`d-flex justify-content-center p-4 flex-column ${classes.home}`}>
            <h1 className="text-center">The Generics</h1>
            <div className="d-flex flex-column align-items-center">
            <Button variant="dark">Get our Latest Album</Button>
            <Button  variant="dark" ><FaPlay width={30} height={30}/></Button>
        </div>
        </Container>
        <HomeSection/>
        <Footer/>
        </div>
    )
 
};

export default Home;