import React, { useEffect, useState } from "react";
import RecipeById from "../components/RecipePage/RecipeById";
import api from "../api/recipe";
import { useParams } from "react-router";

export default function Recipe() {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get(`/recipes/${params.id}`).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <>
      <RecipeById data={data} />
      {/* {data.length > 0? <RecipeById data={data}/> : null} */}
    </>
  );
}
