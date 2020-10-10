import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HiOutlineTag } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import running from "../videos/running8.webm";

function HomePage() {
  return (
    <div className="homeContainer">
      <div className="video-wrap">
        <video src={running} autoPlay={true} loop={true} />
      </div>
      <div className="overlay"></div>
      <div className="video-content">
        <h3 style={{ fontSize: "30px", fontStyle: "italic" }}>
          Discover your style
        </h3>

        <h2>
          Laced Pro
          <IoMdCheckmarkCircleOutline />
        </h2>
        <h3>Footwear for Men, Women & Kids</h3>
        <h3>Your favorite items in all-new vivid colorways</h3>
        <p style={{ fontSize: "30px", margin: "15px 0px" }}>
          Up to{" "}
          <span
            style={{
              background: "white",
              color: "red",
              padding: "10px",
              fontWeight: "bold",
              marginLeft: "5px",
            }}
          >
            {" "}
            40% Off
            <HiOutlineTag />
          </span>
        </p>
        <Link to="/shop" style={{ textDecoration: "none", width: "60%" }}>
          <Button
            variant="outlined"
            color="primary"
            style={{
              color: "ghostwhite",
              background: "black",
              display: "block",
              border: "none",
              borderRadius: "30px",
              fontFamily: "Lato, sans-serif",
              fontSize: "16px",
              marginTop: "2rem",
              padding: "18px 24px",
              width: "100%",
              alignSelf: "center",
            }}
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
