import React from 'react'
import { 
    DeletePageContainer,
    DeleteWrapper,
    Headline,
    DeleteContent,
    Title,
    DeleteMenu,
    DeleteItem,
    GridWrap
 } from './DeletePage.elements'

export default function DeletePage() {
    return (
        <DeletePageContainer>
            <Headline>
                Recipe Delete
            </Headline>
            <DeleteWrapper>
            <GridWrap hoverBg>
            <Title>Recipe</Title>
            <Title>Action</Title>
            </GridWrap>
            
                <DeleteContent>                
                    <DeleteMenu>
                        <GridWrap>
                            <DeleteItem primary>
                                Coffee
                            </DeleteItem>
                            <DeleteItem >
                                Delete
                            </DeleteItem>
                        </GridWrap>
                        <GridWrap>
                            <DeleteItem primary>
                                Coffee
                            </DeleteItem>
                            <DeleteItem>
                                Delete
                            </DeleteItem>
                        </GridWrap>
                        <GridWrap>
                            <DeleteItem primary>
                                Coffee
                            </DeleteItem>
                            <DeleteItem>
                                Delete
                            </DeleteItem>
                        </GridWrap>
                    </DeleteMenu>
                </DeleteContent>
           
            </DeleteWrapper>
        </DeletePageContainer>    )
}
