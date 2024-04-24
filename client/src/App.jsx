import "./App.css";
import { useState } from "react";
import Burger from "./components/burger/Burger";
import Logo from "./components/logo/Logo";
import UserCard from "./components/usercard/Usercard";
import Carrousel from "./components/carrousel/Carrousel";
import MainPage from "./components/main-page/MainPage";

function App() {
  const [coinBalance, setCoinBalance] = useState(100);

  return (
    <>
      <header>
        <Burger />
        <Logo />
        <UserCard coinBalance={coinBalance} />
      </header>

      <main>
        <Carrousel />
        <MainPage coinBalance={coinBalance} setCoinBalance={setCoinBalance} />
      </main>
    </>
  );
}

export default App;
