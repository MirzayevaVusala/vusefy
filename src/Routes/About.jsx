import AboutUs from "../Components/AboutUs";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import image2 from "../images/pic2.jpg"
import Footer from "../Components/Footer";
function About(){
    return(
        <>
        <Navbar />
          <Hero 
          cName="hero-about"
          heroImg={image2}
          title="About"
          
          />
          <AboutUs />
             <Footer />
          </>
    )
    

}
export default About;