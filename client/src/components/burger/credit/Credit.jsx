import "./creditStyle.css";
import Burger from "../Burger";

function Credit() {
  return (
    <>
      <Burger />
      <div className="credit-item">
        <h1>L'équipe OnestpasBet</h1>
        <img
          className="nicolas-img"
          src="./src/assets/images/Nicolas.png"
          alt="photohamilton"
        />
        <h3 className="nicolas-title">Nicolas</h3>
      </div>
      <div className="credit-item">
        <img src="./src/assets/images/Quentin.png" alt="photoleclerc" />
        <h3>Quentin</h3>
      </div>
      <div className="credit-item">
        <img src="./src/assets/images/Angelina.png" alt="photoleclerc" />
        <h3>Angélina</h3>
      </div>
      <div className="credit-item">
        <img
          className="hamid-img"
          src="./src/assets/images/Hamid.png"
          alt="photoleclerc"
        />
        <h3 className="hamid-title">Hamid</h3>
      </div>
    </>
  );
}

export default Credit;
