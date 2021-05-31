import React, { useState } from "react";
import {
  CreatePageContainer,
  CreatePageWrapper,
  Headline,
  RecipeForm,
  FormGroup,
  FormLabel,
  Instruction,
  FormInput,
  Btnwrap,
  CancelBtn,
  AddBtn,
} from "./CreatePage.elements";

export default function CreatePage({ createRecipe }) {
  const [title, setTitle] = useState("");
  const [ing, setIng] = useState("");
  const [steps, setSteps] = useState("");

  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  const onIngredients = (e) => {
    setIng(e.target.value);
  };

  const onSteps = (e) => {
    setSteps(e.target.value);
  };

  /*   const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }; */

  const ingobj = (str) => {
    var values = str.split("\n");
    var obj = {};
    if (str.length > 0) {
      for (var i = 0; i < values.length; i++) {
        var keyValue = values[i].split(":");
        keyValue[1] = keyValue[1].trim();
        obj[keyValue[0]] = keyValue[1];
      }
    }
    return obj;
  };

  const createStepsArray = (str) => {
    return str.split("\n");
  };

  const addRecipe = (e) => {
    var ingredientObj = ingobj(ing);
    const stepsArray = createStepsArray(steps);
    const final = {
      item: title,
      steps: stepsArray,
      ingredients: ingredientObj,
    };
    console.log(final);
    createRecipe(final);
    /*    e.preventDefault();
    data.steps.split("\n");
    const a = ing.split(":");
    const b = {
      [a[0]]: a[1],
    };
    data.ingredients.push(b);
    console.log(data);
    createRecipe(data);
    setData(InitialState); */
  };
  return (
    <CreatePageContainer>
      <Headline>Create Recipe</Headline>
      <CreatePageWrapper>
        <RecipeForm>
          <FormGroup>
            <FormLabel>Recipe</FormLabel>
            <FormInput name="item" value={title} onChange={onTitle} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Ingredient</FormLabel>
            <Instruction>Format to enter ingredients</Instruction>
            <Instruction>Name of ingredient: Quantity Unit</Instruction>
            <Instruction>Press Enter for another new ingredient</Instruction>
            <FormInput
              name="ingredients"
              value={ing}
              onChange={onIngredients}
              big
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Preparations</FormLabel>
            <Instruction>Format to enter preparation steps</Instruction>
            <Instruction>Press Enter twice for new steps</Instruction>
            <FormInput name="steps" value={steps} onChange={onSteps} big />
          </FormGroup>
        </RecipeForm>
        <Btnwrap>
          <CancelBtn>Cancel</CancelBtn>
          <AddBtn onClick={addRecipe}>Add Recipe</AddBtn>
        </Btnwrap>
      </CreatePageWrapper>
    </CreatePageContainer>
  );
}
