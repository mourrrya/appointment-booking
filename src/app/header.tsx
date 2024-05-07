import logo from "../assets/logo-sidepanda.png";
import "../style/header.css";
export const Header = () => {
  return (
    <div className="app-header">
      <img className="logo-img" src={logo} alt="side-panda" />
      <div className="app-menu">
        <span>Menu</span>
        <span>Contact us</span>
      </div>
    </div>
  );
};
