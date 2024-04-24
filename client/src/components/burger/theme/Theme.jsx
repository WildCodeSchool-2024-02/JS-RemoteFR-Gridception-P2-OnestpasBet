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
        <h1>THEME PAGE</h1>
        <div className="drivers-container">
          <button onClick={() => setTheme("driverA")}>
            <img src={driverA} alt="" />
          </button>
          <button onClick={() => setTheme("driverB")}>
            <img src={driverB} alt="" />
          </button>
          <button onClick={() => setTheme("driverC")}>
            <img src={driverC} alt="" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Theme;
