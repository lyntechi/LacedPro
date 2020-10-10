import React from "react";
import { FiMapPin } from "react-icons/fi";
import { GrFacebook } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <p style={{ marginBottom: "1rem" }}>
        © 2020 Laced Pro
        <IoMdCheckmarkCircleOutline />, Inc. All Rights Reserved
      </p>
      <p>
        Pennsylvania, United States
        <a
          href="https://www.mapquest.com/search/results?query=easton%20pa&boundingBox=40.68927817624841,-75.21969795227051,40.677578720206355,-75.18901348114014&page=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMapPin style={{ color: "white" }} />
        </a>
      </p>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <GrFacebook
          style={{ color: "lightblue", margin: "12px 5px", cursor: "pointer" }}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <SiInstagram
          style={{ color: "lightblue", margin: "12px 5px", cursor: "pointer" }}
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        {" "}
        <FiTwitter
          style={{ color: "lightblue", margin: "12px 5px", cursor: "pointer" }}
        />
      </a>
    </div>
  );
}

export default Footer;
