import "./App.css";
import Burger from "./components/menu-burger/Burger";
import Logo from "./components/logo/Logo";
import UserCard from "./components/usercard/Usercard";
import Carrousel from "./components/carrousel/Carrousel";
import MainPage from "./components/main-page/MainPage";
import Footer from "./components/footer/Footer";

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

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
