import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import image2 from "../images/pic4.jpg"
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs";
function Contact(){
    return(
        <>
         <Navbar />
          <Hero 
          cName="hero-about"
          heroImg={image2}        
          />
          <ContactUs />
             <Footer />
        </>
    )

}
export default Contact;