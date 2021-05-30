import React from 'react'
import {
     NavbarContainer,
     NavbarWrapper,
     NavLogo,
     NavMenu,
     NavItems,
     MobileIcon,
     } from './Navbar.elements'
import {FaBars} from 'react-icons/fa'
export default function Navbar({onToggle}) {
    return (
        <NavbarContainer >
            <NavbarWrapper>
                <NavLogo>
                    The Recipe Partner
                </NavLogo>
                <MobileIcon onClick={onToggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItems to="/">
                        Home
                    </NavItems>
                    <span>|</span>
                    <NavItems to="/create-recipe">
                        Create Recipe
                    </NavItems>
                    <span>|</span>
                    <NavItems to="/edit-recipe">
                         Edit Recipe
                    </NavItems>
                    <span>|</span>
                    <NavItems to="/delete-recipe">
                        Delete Recipe
                    </NavItems>
                    <span>|</span>
                    <NavItems to="/shopping-list">
                        Shopping List
                    </NavItems>
                </NavMenu>
            </NavbarWrapper>
        </NavbarContainer>
    )
}
