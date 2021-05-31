import React, { useState, useEffect } from "react";
import {
  RecipeContainer,
  Headline,
  RecipeWrapper,
  RecipeName,
  RecipeContent,
  Section,
  Title,
  Content,
  ContentItem,
} from "./RecipeById.elements";

export default function RecipeById({ data }) {
  const [loaded, setloaded] = useState(false);
  const [ingKeys, setingKeys] = useState([]);
  const [ingValues, setingValues] = useState([]);

  useEffect(() => {
    if (typeof data === "object") {
      if (data.steps) {
        setingKeys(Object.keys(data.ingredients));
        setingValues(Object.values(data.ingredients));
        setloaded(true);
      }
    }
  }, [data]);

  return (
    <>
      <RecipeContainer>
        <Headline>Recipe Detail</Headline>
        <RecipeWrapper>
          <RecipeName>{data.item}</RecipeName>
          <RecipeContent>
            <Section>
              <Title>Ingredients</Title>
              <Content>
                {ingKeys.length > 0
                  ? ingKeys.map((key, i) => {
                      return (
                        <ContentItem key={i}>
                          {ingKeys[i]} {ingValues[i]}
                        </ContentItem>
                      );
                    })
                  : null}
              </Content>
            </Section>
            <Section>
              <Title>Preparations</Title>
              <Content>
                {loaded
                  ? data.steps.map((step, i) => {
                      return <ContentItem key={i}>{step}</ContentItem>;
                    })
                  : null}
              </Content>
            </Section>
          </RecipeContent>
        </RecipeWrapper>
      </RecipeContainer>
    </>
  );
}
