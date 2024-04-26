import { useState, useEffect, useContext } from "react";
import Burger from "./components/burger/Burger";
import Logo from "./components/logo/Logo";
import UserCard from "./components/usercard/Usercard";
import Carrousel from "./components/carrousel/Carrousel";
import MainPage from "./components/main-page/MainPage";
import MainButton from "./components/Buttonbet/mainbutton";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const initialCoinBalance = localStorage.getItem("coinBalance");
  const defaultCoinBalance = initialCoinBalance
    ? parseInt(initialCoinBalance, 10)
    : 500;

  const [coinBalance, setCoinBalance] = useState(defaultCoinBalance);

  useEffect(() => {
    localStorage.setItem("coinBalance", coinBalance.toString());
  }, [coinBalance]);

  const shouldShowMainButton = false; // Mettez ici la condition pour afficher ou masquer MainButton

  return (
    <div className="app-container" data-theme={theme}>
      <header>
        <Burger />
        <Logo />
        <UserCard coinBalance={coinBalance} />
      </header>

      <main>
        <Carrousel />
        <hr className="apphr" />
        <MainPage coinBalance={coinBalance} setCoinBalance={setCoinBalance} />
        {shouldShowMainButton && (
          <MainButton
            coinBalance={coinBalance}
            setCoinBalance={setCoinBalance}
          />
        )}
      </main>
    </div>
  );
}

export default App;
