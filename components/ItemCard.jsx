import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ItemCard({ item, addToCart }) {
  const addedToCart = () => {
    alert(`${item.name} has been added to cart`);
  };
  return (
    <div className="itemCard">
      <div className="itemCardLayer">
        {" "}
        <img src={item.imageUrl} alt="sneaker items" />
        <Link to={`/shop/${item.id}`} id="linkImg">
          <div className="imageOverlay">
            <div className="textOverlay">Click to see more!</div>
          </div>{" "}
        </Link>
        {item.name}
        <br />
        <p style={{ color: "red" }}>${item.price}</p>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "black",
            width: "90%",
            alignSelf: "center",
            marginTop: "5px",
            cursor: "pointer",
            marginBottom: "10px",
            fontFamily: "Lato, sans-serif",
          }}
          onClick={() => {
            addToCart(item);
            addedToCart();
          }}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
