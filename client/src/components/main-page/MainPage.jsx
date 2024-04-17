import { useEffect, useState } from "react";
import axios from "axios";
import "./mainPageStyle.css";
import Parier from "./Pop-ups/PARIER/Parier";

function MainPage() {
  const [datasPilots, setDatasPilots] = useState({});
  const [datasMeetings, setDatasMeetings] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // INFO PILOTES API //
  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/drivers")
      .then((results) => {
        setDatasPilots(results.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // INFO GRAND PRIX API //
  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/meetings")
      .then((results) => {
        setDatasMeetings(results.data);
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
          src={datasPilots && datasPilots[0]?.headshot_url}
          className="pilot-picture"
          alt="PilotPicture"
        />
        <div className="pilot-name">
          <h1>{datasPilots && datasPilots[0]?.full_name}</h1>
        </div>
        <h2 className="inforace">
          📍 {datasMeetings && datasMeetings[4]?.meeting_name} <br />
          LAPS 2/14 <br />
          Position 5/20 <br />
          weather : 🌧️
        </h2>
        <h3>VA T'IL REMPORTER LA COURSE?</h3>
        <div className="info-cote">
          <div className="info-yes">
            <h4>OUI</h4>
            <p>Côte à 10</p>
          </div>
          <div className="info-no">
            <h4>NON</h4>
            <p>Côte à 20</p>
          </div>
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
