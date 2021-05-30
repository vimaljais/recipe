import React, { useState } from 'react'
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
    AddBtn
 } from './CreatePage.elements'

 const InitialState = {
     item:"", 
     steps:[], 
     ingredients:[], 
 }
export default function CreatePage({createRecipe}) {

    const [data, setData] = useState(InitialState)
    const [ing, setIng] = useState("");

    const onIngredients = (e) =>{
        setIng(e.target.value)
    }
    console.log(ing)

    const onChange=(e)=>{
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const addRecipe=(e)=>{
        e.preventDefault();
        const a = ing.split(":");
        a[0] = a[0] + ":";
        data.ingredients.push(a)
        createRecipe(data)
        setData(InitialState)
    }
    return (
        <CreatePageContainer>
            <Headline>
                Create Recipe
            </Headline>
            <CreatePageWrapper>
                <RecipeForm>
                    <FormGroup>
                        <FormLabel>Recipe</FormLabel>
                        <FormInput
                        name="item"
                        value={data.item}
                        onChange={onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel >Ingredient</FormLabel>
                        <Instruction>
                            Format to enter ingredients
                        </Instruction>
                        <Instruction>
                            Name of ingredient: Quantity Unit
                        </Instruction>
                        <Instruction>
                            Press Enter for another new ingredient
                        </Instruction>
                        <FormInput
                        name="ingredients"
                        value={ing}
                        onChange={onIngredients}
                        big/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Preparations</FormLabel>
                        <Instruction>
                            Format to enter preparation steps
                        </Instruction>
                        <Instruction>
                            Press Enter twice for new steps
                        </Instruction>
                        <FormInput 
                        name="steps"
                        value={data.steps}
                        onChange={onChange}
                        big/>
                    </FormGroup>
                </RecipeForm>
                <Btnwrap>
                    <CancelBtn>
                        Cancel
                    </CancelBtn>
                    <AddBtn onClick={addRecipe}>
                        Add Recipe
                    </AddBtn>
                </Btnwrap>
            </CreatePageWrapper>
        </CreatePageContainer>
    )
}
