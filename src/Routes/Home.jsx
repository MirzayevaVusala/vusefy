import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../images/pic1.jpg"
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Home(){
    return(
        <>
      <Navbar />
        <Hero 
        cName="hero"
        heroImg={AboutImg}
        title="Welcome to vusefy"
        // text="Chose your travel plan"
        buttonText="Create your travel plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
        </>
    )

}
export default Home;