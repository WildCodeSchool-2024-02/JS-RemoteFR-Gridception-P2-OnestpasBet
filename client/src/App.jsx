import "./App.css";
import Home from "./components/menu-burger/home/Home";
import Account from "./components/menu-burger/account/Account";
import Theme from "./components/menu-burger/theme/Theme";
import Credit from "./components/menu-burger/credit/Credit";
import Logo from "./components/logo/Logo";
import UserCard from "./components/usercard/Usercard";
import Carrousel from "./components/carrousel/Carrousel";
import MainPage from "./components/main-page/MainPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <header>
        <nav>
          "Menu Burger:
          <Home />
          <Account />
          <Theme />
          <Credit />
          <Logo />
          <UserCard />
        </nav>
      </header>

      <main>
        <Carrousel />
        <MainPage />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
