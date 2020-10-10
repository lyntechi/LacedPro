import React from "react";
import ItemCard from "./ItemCard";

export default function ShoppingList({ items, addToCart }) {
  return (
    <div className="container">
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} addToCart={addToCart} />;
      })}
    </div>
  );
}
