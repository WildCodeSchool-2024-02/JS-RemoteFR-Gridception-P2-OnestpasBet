import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [datas, setDatas] = useState({});

  useEffect(() => {
    axios
      .get("https://api.openf1.org/v1/drivers")
      .then((results) => {
        setDatas(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className="verstappen">
      <img src={datas && datas[0]?.headshot_url} alt="Headshot" />
      <p>{datas && datas[0]?.full_name}</p>
      <p>{datas && datas[0]?.team_name}</p>
      </div>
      
      <div className="Sargeant">
      <img src={datas && datas[1]?.headshot_url} alt="Headshot" />
      <p>{datas && datas[1]?.full_name}</p>
      <p>{datas && datas[1]?.team_name}</p>
    </div>

     <div className="hamilton">
      <img src={datas && datas[13]?.headshot_url} alt="headshot" />
      <p>{datas && datas[13]?.full_name}</p>
      <p>{datas && datas[13]?.team_name}</p>
      </div>

    <div className="Gasly">
      <img src={datas && datas[3]?.headshot_url} alt="Headshot" />
      <p>{datas && datas[3]?.full_name}</p>
      <p>{datas && datas[3]?.team_name}</p>
    </div>

    </>
  );
}

export default App;