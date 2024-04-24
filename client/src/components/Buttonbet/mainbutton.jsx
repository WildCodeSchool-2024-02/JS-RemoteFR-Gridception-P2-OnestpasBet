import { useState } from "react";
import PropTypes from "prop-types";
import Pilot from "./Pilot";
import Footer from "./Footer";
import "./button-betStyle.css";

const initialPilots = [
  {
    name: "OUI",
    odds: 10,
    id: 1,
    amount: 0,
  },
  {
    name: "NON",
    odds: 20,
    id: 2,
    amount: 0,
  },
];

function MainButton({ coinBalance, setCoinBalance }) {
  const [pilots, setPilots] = useState(initialPilots);
  const [showConfirmation, setShowConfirmation] = useState(false);

  function calcBet() {
    return pilots.reduce((total, pilot) => total + pilot.amount, 0);
  }

  function handleBetChange(index, amount) {
    const updatedPilots = pilots.map((pilot, idx) =>
      idx === index ? { ...pilot, amount } : pilot
    );
    setPilots(updatedPilots);
  }

  function handleBetConfirmation() {
    const totalBet = calcBet();
    if (totalBet <= coinBalance) {
      setCoinBalance(coinBalance - totalBet);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  }

  return (
    <div className="container">
      <h1 className="titlepop">VA-T-IL REMPORTER LA COURSE ?</h1>
      <div className="bet-container">
        {pilots.map((pilot, index) => (
          <Pilot
            key={pilot.id}
            name={pilot.name}
            odds={pilot.odds}
            amount={pilot.amount}
            onBetChange={(amount) => handleBetChange(index, amount)}
          />
        ))}
      </div>

      <Footer
        pilots={pilots}
        // eslint-disable-next-line react/jsx-no-bind
        onBetConfirmation={handleBetConfirmation}
        // eslint-disable-next-line react/jsx-no-bind
        calcBet={calcBet}
      />

      {showConfirmation && (
        <div className="bet-confirmation">Votre pari a été validé !</div>
      )}
    </div>
  );
}

MainButton.propTypes = {
  coinBalance: PropTypes.number.isRequired,
  setCoinBalance: PropTypes.func.isRequired,
};

export default MainButton;
