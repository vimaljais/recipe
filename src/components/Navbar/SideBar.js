import styled from "styled-components"
import {FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom"



export default function Sidebar({isOpen, onToggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={onToggle}>
            <CloseIcon onClick={onToggle}>
                <Icon />
            </CloseIcon>            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarItem to='/'>
                    Home
                    </SidebarItem>
                    <SidebarItem to="/create-recipe">
                    Create Recipe
                    </SidebarItem>
                    <SidebarItem to="/edit-recipe">
                    Edit Recipe
                    </SidebarItem>
                    <SidebarItem to="/delete-recipe">
                    Delete Recipe
                    </SidebarItem>
                    <SidebarItem to="/shopping-list">
                    Shopping List
                    </SidebarItem>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

// Sidebar Styling components
const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width:100%;
height: 100%;
background: #0d0d0d;
/* display: grid;
align-items: center; */
top:0;
left: 0;
transition: 0.3s ease-in-out;
opacity:${({isOpen})=> (isOpen? "100%" : "0")};
top:${({isOpen}) => (isOpen? '0':'-100%')};
`
export const CloseIcon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor: pointer;
outline:none;
`
const Icon = styled(FaTimes)`
 color: #6f7d16;
`
const SidebarWrapper = styled.div`
color:#fff;
margin-top: 10rem;
`
const SidebarMenu = styled.div`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
@media screen and (max-width:400px){
    grid-template-rows: repeat(6, 60px);
}
`
const SidebarItem = styled(Link)`
margin:1.6rem 0;
font-size: 2rem;
cursor: pointer;
text-decoration: none;
color:#6f7d16;
&:active, &:hover{
 color:#fff;
}
`