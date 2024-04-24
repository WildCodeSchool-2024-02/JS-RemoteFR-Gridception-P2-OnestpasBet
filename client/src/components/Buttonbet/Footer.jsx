import PropTypes from "prop-types";
import "./button-betStyle.css";

function Footer({ pilots, onBetConfirmation, calcBet }) {
  function handleBetClick() {
    onBetConfirmation();
  }

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
          <div className="total">{calcBet()} 💰</div>
        </div>
        <button type="button" className="popupbet" onClick={handleBetClick}>
          PARIER
        </button>
      </div>
    </div>
  );
}

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
  calcBet: PropTypes.func.isRequired,
};

export default Footer;
