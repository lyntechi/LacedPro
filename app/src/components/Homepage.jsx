import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homePage">
      <video autoPlay={true} loop={true}>
        <source
          src="https://static.nike.com/a/videos/q_90,vc_vp9/mccsot59vf09htkvgzdm/video.webm"
          width="100%"
        />
      </video>
      <div className="banner-text">
        <h2>
          Laced <span>Pro</span>
          <br />
        </h2>
        <p>Women, Men & Kids Sneakers</p>
        <br />
        <Link to="/shop">
          <button>Shop now!</button>
        </Link>
      </div>
    </div>
  );
}
