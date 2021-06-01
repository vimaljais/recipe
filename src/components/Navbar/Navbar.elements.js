import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavbarContainer = styled.div`
height:70px;
width:100%;
background:#0d0d0d;
top:0;

`
export const NavbarWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items:center;
justify-content: space-around;
color:#6f7d16;
`
export const NavLogo = styled.h1`
font-size: 1.5rem;
cursor:pointer;
&:hover{
    color:#fff;
}
`
export const MobileIcon = styled.div`
display: none;
@media screen and (max-width:768px){
    display:block;
    color:#6f7d16;
    font-size: 2rem;
    cursor:pointer;
}
`
export const NavMenu = styled.div`
display: flex;
flex-direction: row;
@media screen and (max-width:768px){
    display:none;
}
`
export const NavItems = styled(Link)`
font-size: 1.3rem;
margin: 0 1rem;
text-decoration: none;
color:#6f7d16;
cursor:pointer;
&:hover{
    color:#fff;
}
`
