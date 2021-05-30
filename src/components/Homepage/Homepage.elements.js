import styled from "styled-components";


export const HomepageContainer = styled.div`
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
export const Subtitle = styled.div`
color:#6f7d16;
text-align: center;
margin: 0 2rem;
font-size: 1.2rem;
margin-bottom: 2rem;
font-weight: bold;
span{
    color:#000;
}
`
export const HomeWrapper = styled.div`
margin:0 6rem;
background: #d4d9d5;
display: flex;
flex-direction:column;
@media screen and (max-width:768px){
    margin:0 1rem ;
}
`
export const HomeContent = styled.div`
height: 100%;
display: flex;
align-items: flex-start;
flex-direction: column;

`
export const Title = styled.h3`
margin: 3rem 2rem;
font-size: 1.4rem;
`
export const FoodMenu = styled.div`
margin: 2rem 0;
font-size: 1.2rem;
width:100%;
`
export const FoodItem = styled.h4`
color:#6f7d16;
padding: 2rem 1rem;
cursor:pointer;
&:hover{
    background: #abb3ad;
    transition: 0.2s ease;
    border-radius: 4px;
}
`