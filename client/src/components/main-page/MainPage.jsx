import { useState, useEffect } from "react";
import axios from "axios";
import "./mainPageStyle.css";
import Bet from "./Pop-ups/Button-Bet/Button-bet";

function MainPage() {
  const [datasPilots, setDatasPilots] = useState({}); // API INFOS PILOTES //
  const [datasMeetings, setDatasMeetings] = useState({}); // API GRAND PRIX
  const [datasLaps, setDatasLaps] = useState({}); // API GRAND PRIX
  const [datasPositions, setDatasPositions] = useState({}); // API GRAND PRIX
  const [showPopup, setShowPopup] = useState(false);
  const [coinbalance, setCoins] = useState(100);
  const [nextClaimTime, setNextClaimTime] = useState(null);

  const updateCoins = (amount) => {
    setCoins(coinbalance + amount);
  };
  // API INFOS PILOTES //
  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/drivers")
      .then((results) => {
        setDatasPilots(results.data);
      })
      .catch((err) => console.error(err));
  });
  // API INFOS GRAND PRIX //
  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/meetings?year=2024&meeting_key=latest")
      .then((results) => {
        setDatasMeetings(results.data);
      })
      .catch((err) => console.error(err));
  });
  // API INFOS LAPS //
  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/laps?meeting_key=latest&driver_number=1") // Pour Verstapp
      .then((results) => {
        setDatasLaps(results.data);
      })
      .catch((err) => console.error(err));
  });
  // API INFOS POSITION //
  useEffect(() => {
    axios
      .get(
        "https://api.openf1.org/v1/position?meeting_key=latest&driver_number=1" // Pour Verstapp
      )
      .then((results) => {
        setDatasPositions(results.data);
      })
      .catch((err) => console.error(err));

    const lastClaimTime = localStorage.getItem("lastClaimTime");
    if (lastClaimTime) {
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 heures en millisecondes
      const nextClaimTimeValue = parseInt(lastClaimTime, 10) + twentyFourHours;
      setNextClaimTime(nextClaimTimeValue);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nextClaimTime !== null) {
        const currentTime = new Date().getTime();
        const timeRemaining = nextClaimTime - currentTime;
        if (timeRemaining <= 0) {
          setNextClaimTime(null);
        } else {
          setNextClaimTime(nextClaimTime);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [nextClaimTime]);

  const handleClaim = () => {
    const currentTime = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const nextClaimTimeValue = currentTime + twentyFourHours;

    updateCoins(200);
    localStorage.setItem("lastClaimTime", currentTime.toString());
    setNextClaimTime(nextClaimTimeValue);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const formatTimeRemaining = () => {
    if (!nextClaimTime) return "00:00:00";

    const currentTime = new Date().getTime();
    const timeRemaining = nextClaimTime - currentTime;

    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
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
          <h1>{datasPilots && datasPilots[0]?.full_name} </h1>
        </div>
        <h2 className="inforace">
          📍 {datasMeetings && datasMeetings[0]?.meeting_name} <br />
          🏁 TOUR: {datasLaps && datasLaps[17]?.lap_number} / 53 ⏱️ TIME:{" "}
          {datasLaps && datasLaps[17]?.lap_duration} <br />⚡ VITESSE MAX:{" "}
          {datasLaps && datasLaps[18]?.st_speed} Km/h <br />
          🚩 Position {datasPositions && datasPositions[17]?.position}/20
        </h2>
        <h3>VA T'IL REMPORTER LA COURSE?</h3>
        <div className="info-cote">
          <div className="info-yes">
            <h4>OUI</h4>
            <p>Côte à 2,40</p>
          </div>
          <div className="info-no">
            <h4>NON</h4>
            <p>Côte à 5</p>
          </div>
        </div>
        {/* Bouton pour ouvrir le pop-up */}
        <button type="button" className="buttonBet" onClick={togglePopup}>
          PARIER
        </button>
        {/* Bouton "Claim" avec minuteur */}
        <button
          type="button"
          className="buttonClaim"
          onClick={handleClaim}
          disabled={nextClaimTime !== null}
        >
          {nextClaimTime !== null
            ? `Prochain Coins dans: ${formatTimeRemaining()}`
            : "Obtenir 200 Coins"}
        </button>
      </div>

      {/* Éléments supplémentaires */}
      <h3 className="hot">🔥HOT</h3>
      <div>
        <span
          className="favorite-icon"
          onClick={toggleFavorite}
          role="button"
          tabIndex={0}
          aria-label={favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleFavorite();
            }
          }}
        >
          {favorite ? (
            <img
              src="./src/assets/images/star.png"
              className="stars"
              alt="stars"
            />
          ) : (
            <img
              src="./src/assets/images/graystar.png"
              className="graystars"
              alt="Graystar"
            />
          )}
        </span>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <Bet />

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
