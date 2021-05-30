import React, { useEffect, useState } from 'react'
import Homepage from '../components/Homepage/Homepage'
// import api from '../api/recipe'
import axios from 'axios'

export default function Home() {
    const [ data, setData] = useState([])

    useEffect(()=>{
        const allData= async() =>{
            const allRecipe = await getRecipe();
            if(allRecipe) setData(allRecipe)
        } 
        allData();
    },[])

    const getRecipe = async() => {
        const response = await axios.get("http://localhost:3000/recipes");
        return response;
    };
    console.log("data",data)
    return (
        <>
        <Homepage data={data}/>
        </>
    )
}
