import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <div className="itemCardLayer">
        {" "}
        <Link
          to={`/shop/${item.id}`}
          id="linkImg"
          style={{ textDecoration: "none" }}
        >
          <img src={item.imageUrl} alt="sneaker items" />
          <div className="imageOverlay">
            <div className="textOverlay">Click to see more!</div>
          </div>{" "}
        </Link>
        <p className="itemName">{item.name}</p>
        <p style={{ color: "red" }}>${item.price}</p>
        <br />
      </div>
    </div>
  );
}