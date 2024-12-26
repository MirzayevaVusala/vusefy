
import "./HeroStyles.css"
function Hero(props) {
    return (

        <div className={props.cName}>
            <img alt="heroImg" src={props.heroImg} />
            <div className="hero-text">
                <h1>
                    {props.title}
                </h1>
                <p>{props.text}</p>

            </div>
        </div>


    )
}
export default Hero;
