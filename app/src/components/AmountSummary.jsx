import React, { useState } from "react";
import formatCurrency from "../utils/formatCurrency";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsQuestionOctagonFill } from "react-icons/bs";
import SimplePopover from "./SimplePopOver";
import { Button } from "@material-ui/core";

function AmountSummary({ cart, totalAmount, clearCart }) {
  const [shipping] = useState(2.86);

  return (
    <div className="summaryCard">
      <h2>Summary</h2>
      <p>
        Do you have a Promo Code?{" "}
        <IoMdArrowDropdown style={{ cursor: "pointer" }} />
        <BsQuestionOctagonFill style={{ cursor: "pointer" }} />
      </p>
      <p>Estimated Shipping & Handling: ${shipping}</p>
      <p>
        Estimated Tax <BsQuestionOctagonFill style={{ cursor: "pointer" }} />{" "}
      </p>
      <hr />
      <div className="totalAndBtns">
        {" "}
        <p>TOTAL: {formatCurrency(totalAmount + shipping)}</p>
        <hr />
        <SimplePopover />
        {cart.length > 0 ? (
          <Button
            onClick={() => clearCart()}
            style={{
              background: "red",
              color: "white",
              width: "98px",
              margin: "0 auto",
              outline: "none",
              fontSize: "11px",
            }}
          >
            Clear Cart
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default AmountSummary;
