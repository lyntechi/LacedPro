import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import { ItemContext } from "./Context";

function ShoppingList() {
  const [items] = useContext(ItemContext);
  return (
    <>
      {items.map((item) => {
        return <ItemCard item={item} />;
      })}
    </>
  );
}

export default ShoppingList;
