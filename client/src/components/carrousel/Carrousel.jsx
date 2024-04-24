import "./carrouselStyle.css";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import flecheGauche from "../../assets/images/flecheGauche.png";
import flecheDroite from "../../assets/images/flecheDroite.png";

function Carrousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const handleClickNext = useCallback(() => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.openf1.org/v1/drivers");

        setImages([
          response.data[0].headshot_url,
          response.data[1].headshot_url,
          response.data[2].headshot_url,
        ]);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      handleClickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleClickNext]);

  return (
    <div className="carrousel">
      <div className="carrousel-block">
        <div className="carrousel-pilots">
          <p>Pilotes 2024</p>
          <img src={images[currentIndex]} alt="Pilote1" />
        </div>

        <div className="carrousel-button left">
          <button type="button" onClick={handleClickPrevious}>
            <img src={flecheGauche} alt="précèdent" />
          </button>
        </div>
        <div className="carrousel-button right">
          <button type="button" onClick={handleClickNext}>
            <img src={flecheDroite} alt="suivant" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
