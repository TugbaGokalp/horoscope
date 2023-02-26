import "./Navbar.scss";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="links">
            <a href="#horoscope">HOROSCOPE</a>
            <a href="#daily">DAILY</a>
            <a href="#tarot">TAROT</a>
            <a href="#article">ARTICLE</a>
            <a href="#contact">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar