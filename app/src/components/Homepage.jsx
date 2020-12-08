import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homePage">
      <div className="banner-text">
        <p style={{ fontStyle: "italic" }}>
          Designs that you will love
          <br />
        </p>
        <h2>
          Laced <span>Pro</span>
          <br />
        </h2>

        <p>Sneakers for Women, Men & Kids</p>
        <br />

        <Link to="/shop">
          <button>Shop now!</button>
        </Link>
      </div>
    </div>
  );
}
