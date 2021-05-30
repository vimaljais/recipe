import React, { useEffect, useState } from "react";
import Homepage from "../components/Homepage/Homepage";
import api from '../api/recipe'
// import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/recipes").then((response) => {
      setData(response.data);
    });
  }, []);

  return <>{data.length > 0 ? <Homepage data={data} /> : null}</>;
}
