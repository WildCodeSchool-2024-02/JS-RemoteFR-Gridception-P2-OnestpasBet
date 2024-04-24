import { useState } from "react";
import PropTypes from "prop-types";
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

function Pilot({ name, odds, amount, onBetChange }) {
  return (
    <div className="pilot-card">
      <div className="name">{name}</div>
      <div className="odds">Côte : {odds}</div>
      <Counter amount={amount} onChange={onBetChange} />
    </div>
  );
}

Pilot.propTypes = {
  name: PropTypes.string.isRequired,
  odds: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onBetChange: PropTypes.func.isRequired,
};

function Counter({ amount, onChange }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const numericValue = parseFloat(inputValue);
    if (!Number.isNaN(numericValue)) {
      onChange(numericValue);
      setInputValue("");
    }
  }

  return (
    <form className="betting" onSubmit={handleSubmit}>
      <div className="choice">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Entrer le montant..."
        />
        <button type="submit" className="montantbutton">
          VALIDER LA MISE
        </button>
      </div>
      <div className="amount">{amount} 💰</div>
    </form>
  );
}

Counter.propTypes = {
  amount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function App({ coinBalance, setCoinBalance }) {
  const [pilots, setPilots] = useState(initialPilots);
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleBetChange(index, amount) {
    const updatedPilots = pilots.map((pilot, idx) => {
      if (idx === index) {
        return { ...pilot, amount };
      }
      return pilot;
    });
    setPilots(updatedPilots);
  }

  function handleBetConfirmation() {
    const totalBet = calcBet();
    if (totalBet <= coinBalance) {
      setCoinBalance(coinBalance - totalBet);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000); // Masquer le popup après 3 secondes
    } else {
      alert("Vous n'avez pas assez de pièces pour ce pari.");
    }
  }

  function calcBet() {
    return pilots.reduce((total, pilot) => total + pilot.amount, 0);
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
        onBetConfirmation={(event) => handleBetConfirmation(event)}
      />
      {showConfirmation && (
        <div className="bet-confirmation">Votre pari a été validé !</div>
      )}
    </div>
  );
}

function Footer({ pilots, onBetConfirmation }) {
  function calcProfit() {
    const profitArray = pilots.map((pilot) => pilot.odds * pilot.amount);
    const highestReturn = Math.max(...profitArray);
    const highestReturnIndex = profitArray.indexOf(highestReturn);
    const outlay = pilots.reduce((total, pilot) => total + pilot.amount, 0);
    return Math.round(
      highestReturn - outlay + pilots[highestReturnIndex].amount
    );
  }

  const profit = calcProfit();

  return (
    <div className="submit">
      <div className="logo">
        <p>VOTRE PARIS</p>
      </div>
      <div className="options">
        <div>
          <div>Gain potentiel:</div>
          <div className="max">{profit} 💰</div>
        </div>
        <div>
          <div>Total Mise:</div>
          <div className="total">{} 💰</div>
        </div>
        <button type="button" className="popupbet" onClick={onBetConfirmation}>
          PARIER
        </button>
      </div>
    </div>
  );
}

App.propTypes = {
  coinBalance: PropTypes.number.isRequired,
  setCoinBalance: PropTypes.number.isRequired,
};

Footer.propTypes = {
  pilots: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      odds: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onBetConfirmation: PropTypes.func.isRequired,
};

function Bet() {
  return <App />;
}

export default Bet;
