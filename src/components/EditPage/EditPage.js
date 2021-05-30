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

export default function EditPage() {
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
                        <GridWrap>
                            <EditItem primary>
                                Coffee
                            </EditItem>
                            <EditItem >
                                Edit
                            </EditItem>
                        </GridWrap>
                        <GridWrap>
                            <EditItem primary>
                                Coffee
                            </EditItem>
                            <EditItem>
                                Edit
                            </EditItem>
                        </GridWrap>
                        <GridWrap>
                            <EditItem primary>
                                Coffee
                            </EditItem>
                            <EditItem>
                                Edit
                            </EditItem>
                        </GridWrap>
                    </EditMenu>
                </EditContent>
           
            </EditWrapper>
        </EditPageContainer>    )
}
