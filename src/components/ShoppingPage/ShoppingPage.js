import React, { useEffect, useState } from 'react'
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

export default function ShoppingPage({data}) {
    const [loaded, setloaded] = useState(false);
    const [ingKeys, setingKeys] = useState([]);
    const [ingValues, setingValues] = useState([]);


    useEffect(()=>{
        data.map(res =>{
            console.log(res)
        })
    })
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
                        {ingKeys.length > 0
                            ? ingKeys.map((key, i) => {
                                return (
                                    <>
                                        <ShoppingItem primary key={i}>
                                            {ingKeys[i]} 
                                        </ShoppingItem>
                                        <ShoppingItem>
                                                {ingValues[i]}
                                        </ShoppingItem>
                                        <ShoppingItem >
                                            Shopping
                                        </ShoppingItem>
                                    </>
                                    
                                );
                                })
                            : null}        
                        </GridWrap>                        
                    </ShoppingMenu>
                </ShoppingContent>
           
            </ShoppingWrapper>
        </ShoppingPageContainer>    )
}
