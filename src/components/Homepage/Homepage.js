import React from 'react'
import { 
    HomepageContainer,
    Headline,
    HomeWrapper,
    Subtitle,
    HomeContent,
    FoodItem,
    FoodMenu,
    Title
 } from './Homepage.elements'
export default function Homepage(props) {
    console.log(props)
    const allRecipes = props.data.data
    return (
        <HomepageContainer>
            <Headline>
                Welcome To Recipe Partner
            </Headline>
            <Subtitle>
                <span>Learn about </span>
                how to cook your favorite
                recipe with ease and share your recipes too.
            </Subtitle>
            <HomeWrapper>
            <Title>Recipe</Title>
                <HomeContent>                
                    {allRecipes.map((recipe) =>{
                        return(
                            <FoodMenu key={recipe.id}>
                                <FoodItem>
                                    {recipe.name}
                                </FoodItem>                                
                            </FoodMenu>
                        )
                    })}
                                    
                </HomeContent>
            </HomeWrapper>
        </HomepageContainer>
    )
}
