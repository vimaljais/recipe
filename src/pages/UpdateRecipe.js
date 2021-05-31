import React,{useState, useEffect} from 'react'
import api from '../api/recipe'
import { useParams } from 'react-router'
import styled from "styled-components";


export default function UpdateRecipe() {
    const params = useParams()
    const [data, setData] = useState([])
    useEffect(()=>{
        api.get(`/recipes/${params.id}`).then((response) => {
            setData(response.data);

          });
    },[])
    console.log(data)
    
    return (
        <EditPageContainer>
        <Headline>Edit Recipe</Headline>
        <EditPageWrapper>
            <RecipeForm>
            <FormGroup>
                <FormLabel>Recipe</FormLabel>
                <FormInput name="item" />
            </FormGroup>
            <FormGroup>
                <FormLabel>Ingredient</FormLabel>
                <Instruction>Format to enter ingredients</Instruction>
                <Instruction>Name of ingredient: Quantity Unit</Instruction>
                <Instruction>Press Enter for another new ingredient</Instruction>
                <FormInput
                name="ingredients"
                
                big
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Preparations</FormLabel>
                <Instruction>Format to enter preparation steps</Instruction>
                <Instruction>Press Enter twice for new steps</Instruction>
                <FormInput
                name="steps"
                
                big
                />
            </FormGroup>
            </RecipeForm>
            <Btnwrap>
            <CancelBtn>Cancel</CancelBtn>
            <AddBtn >Edit Recipe</AddBtn>
            </Btnwrap>
        </EditPageWrapper>
        </EditPageContainer>
    )
}


const EditPageContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content: center;
flex-direction: column;
margin-top:70px;
`
const Headline = styled.h1`
font-size: clamp(2rem, 5vw, 4rem);
color:#000;
text-align: center;
padding-bottom:3rem;
`
const EditPageWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 0 20rem;
@media screen and (max-width:768px){
    margin:0 2rem;
}
`
const RecipeForm = styled.div`
width: 100%;
`
const FormGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-bottom: 4rem;
`
const FormLabel = styled.label`
font-size: 1.2rem;
margin-bottom: 15px;
`
const Instruction = styled.p`
color:#fa5c34;
margin:10px 0;
`
const FormInput = styled.textarea`
padding: ${({big})=>(big? "4rem 0" :"0 0")};
resize: none;
border-radius: 4px;
border: solid grey 1px;
`
const Btnwrap = styled.div`
margin:1.5rem 0;
display:flex;
justify-content: center;
`
const CancelBtn = styled.button`
margin: 0 20px;
padding: 1rem 2rem;
font-size: 17px;
background:#fa5c34;
outline: none;
border:none;
border-radius: 4px;
white-space: nowrap;
color: #fff;
&:hover{
    background: none;
    border: #fa5c34 solid 1px;
    color:#fa5c34;
    transition: 0.2s ease-out;
}
`
const AddBtn = styled.button`
margin: 0 20px;
padding: 1rem 2rem;
font-size: 17px;
background:#6f7d16;
outline: none;
border:none;
border-radius: 4px;
white-space: nowrap;
color: #fff;
&:hover{
    background: none;
    border: #6f7d16 solid 1px;
    color:#6f7d16;
    transition: 0.2s ease-out;
}
`