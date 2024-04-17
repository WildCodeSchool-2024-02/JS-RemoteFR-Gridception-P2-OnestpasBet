import { useState, useEffect } from "react";
import axios from "axios";
import "./mainPageStyle.css";
import Parier from "./Pop-ups/PARIER/Parier";
import UserCard from "../usercard/Usercard";

function MainPage() {
  const [datasPilots, setDatasPilots] = useState({});
  const [datasMeetings, setDatasMeetings] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [coins, setCoins] = useState(100);
  const [nextClaimTime, setNextClaimTime] = useState(null);

  const updateCoins = (amount) => {
    setCoins(coins + amount);
  };

  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/drivers")
      .then((results) => {
        setDatasPilots(results.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("https://api.openf1.org/v1/meetings")
      .then((results) => {
        setDatasMeetings(results.data);
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

  return (
    <>
      <UserCard coins={coins} updateCoins={updateCoins} />
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
        {/* Bouton "Claim" avec minuteur */}
        <button
          type="button"
          className="buttonClaim"
          onClick={handleClaim}
          disabled={nextClaimTime !== null}
        >
          {nextClaimTime !== null
            ? `Claim dans ${formatTimeRemaining()}`
            : "Claim 200 Coins"}
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
