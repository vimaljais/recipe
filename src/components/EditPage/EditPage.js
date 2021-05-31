import React from 'react'
import { 
    EditPageContainer,
    EditWrapper,
    Headline,
    EditContent,
    Title,
    EditMenu,
    EditItem,
    GridWrap
 } from './EditPage.elements'

export default function EditPage(props) {
  const allRecipes = props.data;
    
    return (
        <EditPageContainer>
            <Headline>
                Recipe Edit
            </Headline>
            <EditWrapper>
            <GridWrap hoverBg>
            <Title>Recipe</Title>
            <Title>Action</Title>
            </GridWrap>
            
                <EditContent>                
                    <EditMenu>
                        
                        {allRecipes.map((recipe) => {
                            return (
                                <GridWrap key={recipe.id} to={`/recipes-edit/${recipe.id}`}>
                                    <EditItem primary>
                                    {recipe.item}
                                    </EditItem>
                                    <EditItem >
                                        Edit
                                    </EditItem>
                                </GridWrap>
                            );
                        })}            
                    </EditMenu>
                </EditContent>
           
            </EditWrapper>
        </EditPageContainer>    )
}
