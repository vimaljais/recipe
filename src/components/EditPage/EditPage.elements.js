import { Link } from "react-router-dom";
import styled from "styled-components";


export const EditPageContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content: flex-start;
flex-direction: column;
`
export const Headline = styled.h1`
font-size: clamp(2rem, 5vw, 4rem);
color:#000;
text-align: center;
padding:3rem 0;

`
export const EditWrapper = styled.div`
margin:0 18rem;
background: #d4d9d5;
display: flex;
justify-content: center;
flex-direction: column;
@media screen and (max-width:768px){
    margin:0 1rem ;
}
`
export const GridWrap = styled(Link)`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column: auto;
text-decoration: none;
&:hover{
    background: ${({hoverBg})=>(hoverBg?  "none" : "#abb3ad")};
    transition: 0.2s ease;
    border-radius: 4px;
}
`
export const EditContent = styled.div`
height: 100%;
display: flex;
align-items: flex-start;
margin: 0 2rem;
`
export const Title = styled.h3`
margin: 3rem 2rem;
font-size: 1.4rem;
text-align: center;
color:#000;
&:hover{
    background: none;
    transition: 0.2s ease;
}
`
export const EditMenu = styled.div`
/* margin: 3rem 2rem; */
font-size: 1.2rem;
width:100%;
`
export const EditItem = styled.h4`
color:${({primary}) => (primary? "#6f7d16" : "#000")};
text-align: center;
padding: 2rem 1rem;
height: 100%;
cursor: pointer;
`