import { useEffect, useState } from "react";
import axios from "axios";
import "./mainPageStyle.css";
import Parier from "./Pop-ups/PARIER/Parier";

function MainPage() {
  const [datas, setDatas] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/drivers")
      .then((results) => {
        setDatas(results.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fonction pour ouvrir/fermer le pop-up
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="main-window">
        <img
          src={datas && datas[0]?.headshot_url}
          className="pilot-picture"
          alt="PilotPicture"
        />
        <div className="pilot-name">
          <h1>{datas && datas[0]?.full_name}</h1>
        </div>
        <h2 className="infopilote">
          LAPS 2/14 <br />
          Position 5/20 <br />
          weather : 🌧️
        </h2>
        <div className="chooseButtons">
          <button type="button" className="buttonYes">
            OUI
          </button>
          <button type="button" className="buttonNo">
            NON
          </button>
        </div>
        {/* Bouton pour ouvrir le pop-up */}
        <button type="button" className="buttonBet" onClick={togglePopup}>
          PARIER
        </button>
      </div>

      {/* Éléments supplémentaires */}
      <h3 className="hot">🔥HOT</h3>
      <img src="./src/assets/images/star.png" alt="étoile" className="stars" />

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <Parier />
            {/* Bouton pour fermer le pop-up */}
            <button type="button" onClick={togglePopup} className="closebutton">
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
