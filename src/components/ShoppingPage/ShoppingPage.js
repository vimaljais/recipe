import React, { useEffect, useState } from "react";
import {
  ShoppingPageContainer,
  ShoppingWrapper,
  Headline,
  ShoppingContent,
  Title,
  ShoppingMenu,
  ShoppingItem,
  GridWrap,
} from "./Shopping.elements";

import api from "../../api/recipe";

export default function ShoppingPage() {
  const [coll, setColl] = useState();
  const [ing, setIng] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [q, setQ] = useState([]);
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    var c = {};
    api.get("/recipes").then((res) => {
      res.data.map((rec) => {
        const d = rec.ingredients;
        c = Object.assign(c, d);
      });
      setColl(c);
    });
  }, []);

  useEffect(() => {
    if (typeof coll === "object") {
      setIng(Object.keys(coll));
      setQuantity(Object.values(coll));
    }
  }, [coll]);

  useEffect(() => {
    if (quantity.length > 0) {
      quantity.map((single) => {
        let num = single.match(/\d+/g);
        let letr = single.match(/[a-zA-Z]+/g);
        setQ((oldArray) => [...oldArray, num]);
        setUnit((oldArray) => [...oldArray, letr]);
      });
    }
  }, [ing, quantity]);

  const finalreturn = q.map((a, i) => {
    return (
      <GridWrap key={i}>
        <ShoppingItem primary>{ing[i]}</ShoppingItem>
        <ShoppingItem>{q[i]}</ShoppingItem>
        <ShoppingItem>{unit[i]}</ShoppingItem>
      </GridWrap>
    );
  });

  return (
    <ShoppingPageContainer>
      <Headline>Shopping List</Headline>
      <ShoppingWrapper>
        <GridWrap hoverBg>
          <Title>Ingredients</Title>
          <Title>Quantity</Title>
          <Title>Unit</Title>
        </GridWrap>

        <ShoppingContent>
          <ShoppingMenu>
            {finalreturn}
            {/*             <GridWrap>
              <ShoppingItem primary>Coffee</ShoppingItem>
              <ShoppingItem>Shopping</ShoppingItem>
              <ShoppingItem>Shopping</ShoppingItem>
            </GridWrap>
            <GridWrap>
              <ShoppingItem primary>Coffee</ShoppingItem>
              <ShoppingItem>Shopping</ShoppingItem>
              <ShoppingItem>Shopping</ShoppingItem>
            </GridWrap>
            <GridWrap>
              <ShoppingItem primary>Coffee</ShoppingItem>
              <ShoppingItem>Shopping</ShoppingItem>
              <ShoppingItem>Shopping</ShoppingItem>
            </GridWrap> */}
          </ShoppingMenu>
        </ShoppingContent>
      </ShoppingWrapper>
    </ShoppingPageContainer>
  );
}
