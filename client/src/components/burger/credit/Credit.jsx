import { Link } from "react-router-dom";
import "./creditStyle.css";
import Burger from "../Burger";

import logo from "../../../assets/images/main-logo.png";
import angelina from "../../../assets/images/Angelina.png";
import quentin from "../../../assets/images/Quentin.png";
import nicolas from "../../../assets/images/Nicolas.png";

function Credit() {
  return (
    <>
      <Burger />
      <div className="logo-account">
        <Link to="/" className="return">
          <img src={logo} alt="logo" className="logo-item" />
        </Link>
      </div>
      <div className="credit-item">
        <h1>L'équipe OnestpasBet</h1>
        <img className="nicolas-img" src={nicolas} alt="photonico" />
        <h3 className="nicolas-title">Nicolas</h3>
      </div>
      <div className="credit-item">
        <img src={quentin} alt="photoquentin" />
        <h3>Quentin</h3>
      </div>
      <div className="credit-item">
        <img src={angelina} alt="photoangie" />
        <h3>Angélina</h3>
      </div>
    </>
  );
}

export default Credit;
