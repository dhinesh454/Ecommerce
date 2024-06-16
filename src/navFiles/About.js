import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AboutSection from "./AboutSection";
import Footer from "../components/Footer/Footer";

const About = (props) => {

        return(
               <>
                    
                    <Navigation onshow={props.onshow}/>
                    <Header/>
                    <AboutSection/>
                    <Footer/>
               </>

        )

};

export default About;