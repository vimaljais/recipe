import React, { useEffect, useState } from "react";
import ShoppingPage from "../components/ShoppingPage/ShoppingPage";
import api from "../api/recipe";

export default function ShoppingList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/recipes").then((response) => {
      setData(response.data);
    });
  }, []);
  return <>{data.length > 0 ? <ShoppingPage data={data} /> : null}</>;
}
