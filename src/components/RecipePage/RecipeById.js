import React from 'react'
import { 
    RecipeContainer,
    Headline,
    RecipeWrapper,
    RecipeName,
    RecipeContent,
    Section,
    Title,
    Content,
    ContentItem
} from './RecipeById.elements'

export default function RecipeById({data}) {
    
    const res = Object.entries(data)
    console.log(data)
    
    return (
            <>
                {res?
                <RecipeContainer>
                <Headline>Recipe Detail</Headline>
                <RecipeWrapper >
                        <RecipeName>Coffee</RecipeName>
                        <RecipeContent>
                            <Section>
                                <Title>Ingredients</Title>
                                <Content>
                                    <ContentItem>Milk</ContentItem>
                                    <ContentItem>Milk</ContentItem>
                                    <ContentItem>Milk</ContentItem>
                                    <ContentItem>Milk</ContentItem>
                                </Content>
                            </Section>
                            <Section>
                                <Title>Preparations</Title>
                                <Content>
                                  <ContentItem>Add</ContentItem>
                                  <ContentItem>Add</ContentItem>
                                  <ContentItem>Add</ContentItem>
                                </Content>
                            </Section>
                        </RecipeContent>
                  </RecipeWrapper>
                
                    
             </RecipeContainer>
             :
             null
                }
            </>
    )
}
