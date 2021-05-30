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
} from "./Homepage.elements";
export default function Homepage(props) {
  const allRecipes = props.data;
  console.log("All",allRecipes);
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
        <FoodMenu >
          {allRecipes.map((recipe) => {
            return (
              
                <FoodItem key={recipe.id}> {recipe.item}</FoodItem>
              
            );
          })}
          </FoodMenu>
        </HomeContent>
      </HomeWrapper>
    </HomepageContainer>
  );
}
