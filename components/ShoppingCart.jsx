import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CheckOut({ cart, removeCartItem, items }) {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };


  const removeAlert = () => {
    alert(`Item will be removed from cart`);
  };
  return (
    <div className="cartContainer">
      {cart.map((item) => {
        return (
          <div className="cartItemCard">
           
              <img src={item.imageUrl} alt="sneaker items" />
          

            <div className="cartTitles">
              <h2>{item.name}</h2>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ${item.price}
              </p>
              <select>
                <option>Size</option>
                <option>5.5</option>
                <option>6</option>
                <option>6.5</option>
                <option>7</option>
                <option>7.5</option>
                <option>8</option>
                <option>8.5</option>
                <option>9</option>
              </select>
              Quantity{" "}
              <div style={{ display: "flex" }}>
                {" "}
                <AiOutlineMinusSquare
                  style={{ cursor: "pointer" }}
                  onClick={decrementCount}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "yellow",
                    width: "2rem",
                  }}
                >
                  {" "}
                  {count}{" "}
                </p>{" "}
                <AiOutlinePlusSquare
                  style={{ cursor: "pointer" }}
                  onClick={increaseCount}
                />
              </div>
              <p style={{ fontWeight: "900" }}>Shipping Information</p>
              <p
                style={{
                  textAlign: "center",
                  // paddingBottom: "5rem",
                }}
              >
                {item.shipping}
              </p>
            </div>
            <span
              className="redMark"
              style={{ color: "red", height: "0" }}
              onClick={() => {
                removeCartItem(item.id);
                removeAlert()
              }}
            >
              <FaWindowClose />
            </span>
            <br />
          </div>
        );
      })}
      {cart.length < 1 ? (
        <h2 style={{ fontSize: "2rem", color: "darkgrey" }}>
          Cart Is Empty <span role="img" aria-label="emoji"></span>
          <br />
          <p style={{ textAlign: "center" }}> </p>
        </h2>
      ) : null}
    </div>
  );
}
