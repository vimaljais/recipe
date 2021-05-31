import React from 'react'
import { 
    DeletePageContainer,
    DeleteWrapper,
    Headline,
    DeleteContent,
    Title,
    DeleteMenu,
    DeleteItem,
    GridWrap
 } from './DeletePage.elements'

export default function DeletePage(props) {
  const allRecipes = props.data;

    return (
        <DeletePageContainer>
            <Headline>
                Recipe Delete
            </Headline>
            <DeleteWrapper>
            <GridWrap hoverBg>
            <Title>Recipe</Title>
            <Title>Action</Title>
            </GridWrap>
            
                <DeleteContent>                
                    <DeleteMenu>
                    {allRecipes.map((recipe) => {
                            return (
                                <GridWrap key={recipe.id} to={`/recipes-delete/${recipe.id}`}>
                                    <DeleteItem primary>
                                    {recipe.item}
                                    </DeleteItem>
                                    <DeleteItem >
                                        Delete
                                    </DeleteItem>
                                </GridWrap>
                            );
                        })}                                                
                    </DeleteMenu>
                </DeleteContent>
           
            </DeleteWrapper>
        </DeletePageContainer>    )
}
