import React from "react";
import {
  HomepageContainer,
  Headline,
  HomeWrapper,
  Subtitle,
  HomeContent,
  FoodItem,
  FoodMenu,
  Title,
  FoodLink,
} from "./Homepage.elements";
export default function Homepage(props) {
  const allRecipes = props.data;
  console.log("All", allRecipes);
  return (
    <HomepageContainer>
      <Headline>Welcome To Recipe Partner</Headline>
      <Subtitle>
        <span>Learn about </span>
        how to cook your favorite recipe with ease and share your recipes too.
      </Subtitle>
      <HomeWrapper>
        <Title>Recipe</Title>
        <HomeContent>
          <FoodMenu>
            {allRecipes.map((recipe) => {
              return (
                <FoodItem key={recipe.id}>
                  <FoodLink to={`/recipes/${recipe.id}`}>
                    {recipe.item}
                  </FoodLink>
                </FoodItem>
              );
            })}
          </FoodMenu>
        </HomeContent>
      </HomeWrapper>
    </HomepageContainer>
  );
}
