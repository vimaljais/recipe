import React ,  { useEffect, useState }from 'react'
import EditPage from '../components/EditPage/EditPage'
import api from '../api/recipe'

export default function EditRecipe() {
  const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/recipes").then((response) => {
          setData(response.data);
        });
      }, []);
    return (
        <>
            {data.length > 0? <EditPage data={data}/> : null}
        </>
    )
}
