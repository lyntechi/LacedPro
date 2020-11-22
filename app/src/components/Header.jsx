import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiStore } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";

export default function Header(props) {
  const { cart } = props;

  return (
    <div className="header">
      <div className="nav">
        <h1>LACED PRO </h1>
        <div className="links">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <p>
              <BiStore
                style={{
                  fontSize: "24px",
                  marginLeft: "5px",
                  position: "relative",
                }}
              />
            </p>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
            <p>
              <AiOutlineShopping
                style={{
                  fontSize: "24px",
                  marginLeft: "5px",
                  position: "relative",
                }}
              />
            </p>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <p>
              <RiShoppingCartLine
                style={{
                  position: "relative",
                  color: "white",
                  fontSize: "24px",
                }}
              />
              <span className="cartSpan" style={{ position: "absolute" }}>
                {cart.length > 0 && cart.length}
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
