
import styled from "styled-components";


export const CreatePageContainer = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content: center;
flex-direction: column;
margin-top:70px;
`
export const Headline = styled.h1`
font-size: clamp(2rem, 5vw, 4rem);
color:#000;
text-align: center;
padding-bottom:3rem;
`
export const CreatePageWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 0 20rem;
@media screen and (max-width:768px){
    margin:0 2rem;
}
`
export const RecipeForm = styled.div`
width: 100%;
`
export const FormGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-bottom: 4rem;
`
export const FormLabel = styled.label`
font-size: 1.2rem;
margin-bottom: 15px;
`
export const Instruction = styled.p`
color:#fa5c34;
margin:10px 0;
`
export const FormInput = styled.input`
padding: ${({big})=>(big? "4rem 0" :"0 0")};
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
export const AddBtn = styled.button`
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