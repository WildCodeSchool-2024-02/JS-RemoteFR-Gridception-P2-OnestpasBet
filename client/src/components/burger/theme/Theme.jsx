import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

import driverA from "../../../assets/images/hamilton.png";
import driverB from "../../../assets/images/leclerc.png";
import driverC from "../../../assets/images/Angelina.png";

import "./themestyle.css";
import Burger from "../Burger";

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Burger />

      <section className="app-container" data-theme={theme}>
        <div className="logo-item">
          <Link to="/" className="return">
            <img
              src="./src/assets/images/main-logo.png"
              alt="logo"
              className="logo-item"
            />
          </Link>
        </div>
        <h1 className="title_theme">CHOISIR UN THEME:</h1>
        <div className="drivers-container">
          <div className="buttonhamilton">
            <button type="button" onClick={() => setTheme("driverA")}>
              <img src={driverA} alt="driverA" className="halmiltonButton" />
            </button>
          </div>
          <div className="buttonleclerc">
            <button type="button" onClick={() => setTheme("driverB")}>
              <img className="leclercButton" src={driverB} alt="driver B" />
            </button>
          </div>
          <div className="buttonangie">
            <button type="button" onClick={() => setTheme("driverC")}>
              <img className="angieButton" src={driverC} alt="driverC" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Theme;
