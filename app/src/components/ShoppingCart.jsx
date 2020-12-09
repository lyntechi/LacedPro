import React, { useState, useEffect } from "react";
import { TiTimesOutline } from "react-icons/ti";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

export default function CheckOut({ cart, removeCartItem }) {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cart.length > 0 ? "cartContainer" : "emptyContainer"}>
      {cart.map((item) => {
        return (
          <div className="cartItemCard">
            <img src={item.imageUrl} alt="sneaker items" />

            <div className="cartTitles">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                {" "}
                <span
                  className="redMark"
                  style={{
                    color: "teal",
                    height: "0",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    removeCartItem(item.id);
                    removeAlert();
                  }}
                >
                  <TiTimesOutline style={{ fontSize: "1.4rem" }} />
                </span>
              </div>

              <h2>{item.name}</h2>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ${item.price}
                <img src={item.imageUrl} alt="sneaker items" />
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
              <p style={{ fontWeight: "bold" }}>Quantity </p>
              <div style={{ display: "flex" }}>
                {" "}
                <AiOutlineMinusSquare
                  style={{
                    cursor: "pointer",
                    fontSize: "17px",
                    color: "black",
                  }}
                  onClick={() => {
                    decrementCount();
                  }}
                />
                <p
                  style={{
                    width: "35px",
                    fontSize: "14px",
                    border: "1px solid white",
                  }}
                >
                  {" "}
                  {count}{" "}
                </p>{" "}
                <AiOutlinePlusSquare
                  style={{
                    cursor: "pointer",
                    fontSize: "17px",
                    color: "black",
                  }}
                  onClick={() => {
                    increaseCount();
                  }}
                  value={count}
                />
              </div>
              <p style={{ fontWeight: "900" }}>Shipping Information</p>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                {item.shipping}
              </p>
            </div>

            <br />
          </div>
        );
      })}
      {cart.length < 1 ? <h2>Cart Is Empty</h2> : null}
    </div>
  );
}
