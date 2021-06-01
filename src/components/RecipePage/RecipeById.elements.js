import styled from "styled-components"

export const RecipeContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content: center;
flex-direction: column;
`
export const Headline = styled.h1`
font-size: clamp(2rem, 5vw, 4rem);
color:#000;
text-align: center;
padding-bottom:3rem;

`
export const RecipeWrapper = styled.div`
margin:0 6rem;
background: #d4d9d5;
display: flex;
flex-direction:column;
@media screen and (max-width:768px){
    margin:0 1rem ;
}
`
export const RecipeName = styled.h3`
margin: 3rem 2rem;
font-size: 1.4rem;
text-align: center;
color:#6f7d16;
`
export const RecipeContent = styled.div`
padding: 0 2rem;
`
export const Section = styled.div``
export const Title = styled.h4`
color:#6f7d16;
margin-bottom: 12px;

`
export const Content = styled.div`
padding: 0 10px;
margin-bottom: 3rem;
`
export const ContentItem = styled.div`
font-size: 16px;
padding: 8px 0;
`
export const Btnwrap = styled.div`
margin:1.5rem 0;
display:flex;
justify-content: center;
`
export const CancelBtn = styled.button`
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