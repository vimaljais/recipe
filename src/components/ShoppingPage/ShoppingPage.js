import React from 'react'
import { 
    ShoppingPageContainer,
    ShoppingWrapper,
    Headline,
    ShoppingContent,
    Title,
    ShoppingMenu,
    ShoppingItem,
    GridWrap
 } from './Shopping.elements'

export default function ShoppingPage(props) {
    
    return (
        <ShoppingPageContainer>
            <Headline>
            Shopping List
            </Headline>
            <ShoppingWrapper>
            <GridWrap hoverBg>
            <Title>Ingredients</Title>
            <Title>Quantity</Title>
            <Title>Unit</Title>
            </GridWrap>
            
                <ShoppingContent>                
                    <ShoppingMenu>
                        <GridWrap>
                            <ShoppingItem primary>
                                Coffee
                            </ShoppingItem>
                            <ShoppingItem >
                                Shopping
                            </ShoppingItem>
                            <ShoppingItem >
                                Shopping
                            </ShoppingItem>
                        </GridWrap>
                        <GridWrap>
                            <ShoppingItem primary>
                                Coffee
                            </ShoppingItem>
                            <ShoppingItem>
                                Shopping
                            </ShoppingItem>
                            <ShoppingItem >
                                Shopping
                            </ShoppingItem>
                        </GridWrap>
                        <GridWrap>
                            <ShoppingItem primary>
                                Coffee
                            </ShoppingItem>
                            <ShoppingItem>
                                Shopping
                            </ShoppingItem>
                            <ShoppingItem >
                                Shopping
                            </ShoppingItem>
                        </GridWrap>
                    </ShoppingMenu>
                </ShoppingContent>
           
            </ShoppingWrapper>
        </ShoppingPageContainer>    )
}
