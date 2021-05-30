import React from 'react'
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

export default function CreatePage() {
    return (
        <CreatePageContainer>
            <Headline>
                Create Recipe
            </Headline>
            <CreatePageWrapper>
                <RecipeForm>
                    <FormGroup>
                        <FormLabel>Recipe</FormLabel>
                        <FormInput/>
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
                        <FormInput big/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Preparations</FormLabel>
                        <Instruction>
                            Format to enter preparation steps
                        </Instruction>
                        <Instruction>
                            Press Enter twice for new steps
                        </Instruction>
                        <FormInput big/>
                    </FormGroup>
                </RecipeForm>
                <Btnwrap>
                    <CancelBtn>
                        Cancel
                    </CancelBtn>
                    <AddBtn>
                        Add Recipe
                    </AddBtn>
                </Btnwrap>
            </CreatePageWrapper>
        </CreatePageContainer>
    )
}
