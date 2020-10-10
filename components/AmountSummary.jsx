import React, { useState } from "react";
import formatCurrency from "../utils/formatCurrency";
import { Button } from "@material-ui/core";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsQuestionOctagonFill } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";

function AmountSummary({ cart }) {
  const [shipping] = useState(2.86);
  const totalAmount = cart.reduce(
    (total, currentValue) => total + currentValue.price,
    0
  );

  return (
    <div className="summaryCard">
      <h2 style={{ fontSize: "1.9rem", marginBottom: "2px" }}>Summary</h2>
      <p
        style={{
          fontWeight: "900",
          textAlign: "left",
          fontSize: "1.1rem",
          marginBottom: "5px",
        }}
      >
        Do you have a Promo Code?{" "}
        <IoMdArrowDropdown style={{ cursor: "pointer" }} />
        <BsQuestionOctagonFill style={{ cursor: "pointer" }} />
      </p>
      <p
        style={{
          fontWeight: "900",
          textAlign: "left",
          fontSize: "1rem",
          marginBottom: "5px",
        }}
      >
        Estimated Shipping & Handling: {shipping}
      </p>
      <p
        style={{
          fontWeight: "900",
          textAlign: "left",
          fontSize: "1rem",
          marginBottom: "5px",
        }}
      >
        Estimated Tax <BsQuestionOctagonFill style={{ cursor: "pointer" }} />{" "}
      </p>
      <hr />
      <p style={{ fontWeight: "900", textAlign: "left", fontSize: "1.1rem" }}>
        TOTAL: {formatCurrency(totalAmount + shipping)}
      </p>
      <hr />
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundColor: "green",

          width: "100%",
          alignSelf: "center",
          marginTop: "5px",
          cursor: "pointer",
          marginBottom: "10px",
          fontFamily: "Lato, sans-serif",
        }}
      >
        Checkout
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundColor: "grey",
          width: "100%",
          alignSelf: "center",
          marginTop: "5px",
          cursor: "pointer",
          marginBottom: "10px",
          fontFamily: "Lato, sans-serif",
        }}
      >
        <FaCcPaypal /> Paypal
      </Button>
    </div>
  );
}

export default AmountSummary;
