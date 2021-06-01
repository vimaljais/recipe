import React, { useEffect, useState } from 'react'
import api from '../api/recipe'
import { useParams } from 'react-router'
import styled from "styled-components"
import { useHistory } from "react-router";




function Remove({ data, onDelete }) {
    const [loaded, setloaded] = useState(false);
    const [ingKeys, setingKeys] = useState([]);
    const [ingValues, setingValues] = useState([]);
    const history = useHistory()
    useEffect(() => {
        if (typeof data === "object") {
          if (data.steps) {
            setingKeys(Object.keys(data.ingredients));
            setingValues(Object.values(data.ingredients));
            setloaded(true);
          }
        }
      }, [data]);
      const cancel=()=>{
        history.push('/delete-recipe', {from: "RemoveRecipe"})
      }
    
    return (
        <RecipeContainer>
                <Headline>Delete Recipe</Headline>
                <RecipeWrapper >
                        <RecipeName>{data.item}</RecipeName>
                        <RecipeContent>
                            <Section>
                                <Title>Ingredients</Title>
                                <Content>
                                    {ingKeys.length > 0
                                        ? ingKeys.map((key, i) => {
                                            return (
                                                <ContentItem key={i}>
                                                {ingKeys[i]} {ingValues[i]}
                                                </ContentItem>
                                            );
                                            })
                                        : null}
                                </Content>
                            </Section>
                            <Section>
                                <Title>Preparations</Title>
                                <Content>
                                {loaded
                                    ? data.steps.map((step, i) => {
                                        return <ContentItem key={i}>{step}</ContentItem>;
                                        })
                                    : null}
                                </Content>
                            </Section>
                        </RecipeContent>
                        <Btnwrap>
                            <CancelBtn onClick={cancel}>Cancel</CancelBtn>
                            <DeleteBtn onClick={onDelete}>Delete Recipe</DeleteBtn>
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

export default function RemoveRecipe(){
    const params = useParams();
    const [detail, setDetail] = useState([]);
    const history = useHistory()

    useEffect(() => {
        api.get(`/recipes/${params.id}`).then((response) => {
            setDetail(response.data);
            });
    }, []);
    const onDelete=async()=>{
        await api.delete(`/recipes/${params.id}`)
        history.push('/delete-recipe', {from: "RemoveRecipe"})
    }
    return (
            <>
            <Remove data={detail} onDelete={onDelete}/>
            {/* {data.length > 0? <RecipeById data={data}/> : null} */}
            </>
        );
}