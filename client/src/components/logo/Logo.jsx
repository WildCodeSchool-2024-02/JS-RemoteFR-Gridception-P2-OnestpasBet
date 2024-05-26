import "./logoStyle.css";
import f1Sound from "./sound/F1sound.mp3";

function Logo() {
  const playF1Sound = () => {
    const audio = new Audio(f1Sound);
    audio.volume = 0.02;
    audio.play();
  };

  return (
    <img
      className="main-logo"
      src="./src/assets/images/main-logo.png"
      alt="logomain"
      role="presentation"
      aria-hidden="true"
      onClick={playF1Sound}
    />
  );
}

export default Logo;
