import React, { useState } from 'react'
import CreatePage from '../components/CreatePage/CreatePage'
import {v4 as uuid} from 'uuid'
import api from '../api/recipe'

export default function CreateRecipe() {
    const [data, setData] = useState([])

    const createRecipe = async(recipe) =>{
        console.log(recipe);
        const request = {
            id: uuid(),
            ...recipe
        }
        const response =  await api.post("/recipes", request);
        setData([...data, response.data])
    }
    return (
        <>
            <CreatePage createRecipe={createRecipe}/>
        </>
    )
}
