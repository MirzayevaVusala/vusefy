import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../images/pic3.jpg";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Service(){
    return(
        <>
      
      <Navbar />
          <Hero 
          cName="hero-service"
          heroImg={AboutImg}
          title="Service"
          
          />
         <Trip />
         <Footer />
        </>
    )

}
export default Service;