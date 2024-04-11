import { useEffect, useState } from "react";
import axios from "axios";
import "./mainPageStyle.css";

function MainPage() {
  const [datas, setDatas] = useState({});

  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/drivers")
      .then((results) => {
        setDatas(results.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main-window">
      <img
        src={datas && datas[0]?.headshot_url}
        className="pilotsPicture"
        alt="PilotsPicture"
      />
      <div className="verstappenname">
        <h1>{datas && datas[0]?.full_name}</h1>
      </div>
      <h2>{datas && datas[0]?.team_name}</h2>
    </div>
  );
}

export default MainPage;
