import React, { useEffect, useState } from 'react'
import api from '../api/recipe'
import { useParams } from 'react-router'
import styled from "styled-components"

export default function RemoveRecipe() {
    const params = useParams()
    const [data, setData] = useState([])
    useEffect(()=>{
        api.get(`/recipes/${params.id}`).then((response) => {
            setData(response.data);

          });
    },[])
    return (
        <RecipeContainer>
                <Headline>Delete Recipe</Headline>
                <RecipeWrapper >
                        <RecipeName>Coffee</RecipeName>
                        <RecipeContent>
                            <Section>
                                <Title>Ingredients</Title>
                                <Content>
                                    <ContentItem>Milk</ContentItem>
                                    <ContentItem>Milk</ContentItem>
                                    <ContentItem>Milk</ContentItem>
                                    <ContentItem>Milk</ContentItem>
                                </Content>
                            </Section>
                            <Section>
                                <Title>Preparations</Title>
                                <Content>
                                  <ContentItem>Add</ContentItem>
                                  <ContentItem>Add</ContentItem>
                                  <ContentItem>Add</ContentItem>
                                </Content>
                            </Section>
                        </RecipeContent>
                        <Btnwrap>
                            <CancelBtn>Cancel</CancelBtn>
                            <DeleteBtn >Delete Recipe</DeleteBtn>
                        </Btnwrap>
                  </RecipeWrapper>

                    
             </RecipeContainer>
    )
}



 const RecipeContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content: center;
flex-direction: column;
`
 const Headline = styled.h1`
font-size: clamp(2rem, 5vw, 4rem);
color:#000;
text-align: center;
padding-bottom:3rem;

`
 const RecipeWrapper = styled.div`
margin:0 6rem;
background: #d4d9d5;
display: flex;
flex-direction:column;
@media screen and (max-width:768px){
    margin:0 1rem ;
}
`
 const RecipeName = styled.h3`
margin: 3rem 2rem;
font-size: 1.4rem;
text-align: center;
color:#6f7d16;
`
 const RecipeContent = styled.div`
padding: 0 2rem;
`
 const Section = styled.div``
 const Title = styled.h4`
color:#6f7d16;
margin-bottom: 12px;

`
 const Content = styled.div`
padding: 0 10px;
margin-bottom: 3rem;
`
 const ContentItem = styled.div`
font-size: 16px;
padding: 8px 0;
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
 const DeleteBtn = styled.button`
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