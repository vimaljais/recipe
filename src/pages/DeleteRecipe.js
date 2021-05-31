import React, { useEffect, useState } from 'react'
import DeletePage from '../components/DeletePage/DeletePage'
import api from '../api/recipe'



export default function DeleteRecipe() {
    const [data, setData] = useState([]);

    useEffect(() => {
      api.get("/recipes").then((response) => {
        setData(response.data);
      });
    }, []);
  
    return (
        <>
        {data.length > 0 ? <DeletePage data={data}/>: null}
        </>
    )
}
