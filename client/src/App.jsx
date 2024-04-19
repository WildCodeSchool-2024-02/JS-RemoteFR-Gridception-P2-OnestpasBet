import "./App.css";
import Burger from "./components/burger/Burger";
import Logo from "./components/logo/Logo";
import UserCard from "./components/usercard/Usercard";
import Carrousel from "./components/carrousel/Carrousel";
import MainPage from "./components/main-page/MainPage";

function App() {
  return (
    <>
      <header>
        <Burger />
        <Logo />
        <UserCard />
      </header>

      <main>
        <Carrousel />
        <MainPage />
      </main>
    </>
  );
}

export default App;
