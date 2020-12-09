import React, { useContext,useEffect } from "react";
import ItemCard from "./ItemCard";
import { ItemContext } from "./Context";

function ShoppingList() {
  const [items] = useContext(ItemContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {items.map((item) => {
        return <ItemCard item={item} />;
      })}
    </>
  );
}

export default ShoppingList;
