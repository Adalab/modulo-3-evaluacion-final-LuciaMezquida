import rick from "../../images/rick-sanchez.png";
import morty from "../../images/morty.png";
import logo from "../../images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={rick} alt="Rick" className="header__rick" />
      <img src={logo} alt="Logo" className="header__logo" />
      <img src={morty} alt="Morty" className="header__morty" />
    </header>
  );
};

export default Header;
