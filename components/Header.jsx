import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export default function Header({ cart, clearCart, setSearchText }) {
  const changeHandler = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ marginLeft: "2rem"}}>
          Laced Pro <IoMdCheckmarkCircleOutline />{" "}
        </h1>
      </Link>
      <input
        type="text"
        placeholder="search 🔍"
        style={{
          textAlign: "center",
          borderRadius: "2px",
          outline: "none",
          width: "20%",
          height: "23px",
          marginTop: "0.6rem",
          border: "none",
          marginLeft: "12rem"
         
        }}
        onChange={changeHandler}
      />

      <div className="nav">
        <Link
          to="/shop"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <p>Inventory</p>
        </Link>
        <Link
          to="/cart"
          style={{ textDecoration: "none", color: "ghostwhite" }}
        >
          <p>
            Cart{" "}
            <span
              style={{
                color: "yellow",
                borderRadius: "20px",

                fontWeight: "900",
                fontSize: "14px",
                padding: "1px 5px",
                marginTop: "10px",
              }}
            >
              {""} {cart.length > 0 && cart.length}
            </span>
          </p>
        </Link>
        {cart.length > 0 ? <p onClick={() => clearCart()}>Clear Cart</p> : null}

        <p style={{ cursor: "pointer" }}>My Account</p>
      </div>
    </>
  );
}
