import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

function Advertisement() {
  return (
    <div className="Advertisement">
      <div className="titlesContainer">
        <div className="titles">
          <h1>
            Laced Pro Shoes 2021
            <br /> Collections For You
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type.
            <br />
            <button>
              Email Subscribe <AiFillPlayCircle className="playIcon" />
            </button>
          </p>
        </div>
        <img
          src="https://www.nicepng.com/png/full/101-1019732_nike-air-max-97-og-qs-silver-bullet.png"
          alt="nike shoes"
        />
      </div>
    </div>
  );
}

export default Advertisement;
