import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

function IndividualItem({ addToCart, items }) {
  const params = useParams();
  const product = items.find((item) => `${item.id}` === params.id);
  const addedToCart = () => {
    alert(`${product.name}has been added to cart`);
  };

  return (
    <div className="imagesVideoContainer">
      <div className="firstGroupImages">
        <img src={product.extras.urlOne} alt={`${product.name}`} />
        <img src={product.extras.urlTwo} alt={`${product.name}`} />
      </div>
      <div className="videoContent">
        <h2
          style={{
            fontSize: "1.4rem",
          }}
        >
          {product.name}
        </h2>
        <p
            style={{
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ${product.price}
          </p>
        <video src={product.vid} autoPlay={true} loop={true} />
        <p>{product.prize}</p>

        <div className="videoContentTitles">
      
          <p>Available Sizes</p>
          <div className="sizes">
            <div className="optionsFlex">
              <div className="options">5.5</div>
              <div className="options">6</div>
              <div className="options">6.5</div>
              <div className="options">7</div>
            </div>
            <div className="optionsFlex">
              <div className="options">7.5</div>
              <div className="options">8</div>
              <div className="options">8.5</div>
              <div className="options">9</div>
            </div>
            <p style={{ textAlign: "center", fontWeight: "900" }}>
              Colors Available
            </p>

            <div className="colors">
              <div className="orange"></div>
              <div className="blue"></div>
              <div className="green"></div>
              <div className="grey"></div>
            </div>
          </div>
          <p>{product.description}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addToCart(product);
              addedToCart();
            }}
            style={{
              backgroundColor: "green",

              margin: "1.6rem",

              cursor: "pointer",

              fontFamily: "Lato, sans-serif",
            }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="secondGroupImages">
        <img src={product.extras.urlThree} alt={`${product.name}`} />
        <img src={product.extras.urlFour} alt={`${product.name}`} />
      </div>
    </div>
  );
}

export default IndividualItem;

/* 






*/

/* <div className="individualItems">
<div className="individualItemCard">
  <div className="groupPictures">
    <div>
      {" "}
      <img src={product.extras.urlTwo} alt="individual sneakers" />
      <img src={product.extras.urlOne} alt="individual sneakers" />
    </div>

    <div className="videoAndTitles">
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          padding: "5px",
        }}
      >
        {product.name}
      </h2>
      <video
        src={product.vid}
        autoPlay={true}
        loop={true}
        className="videos"
      />{" "}
      <div className="individualTitles">
        <p
          style={{
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ${product.price}
        </p>
        <p style={{ textAlign: "center", fontWeight: "900" }}>
          Available Sizes
        </p>
        <div className="sizes">
          <div className="optionsFlex">
            <div className="options">5.5</div>
            <div className="options">6</div>
            <div className="options">6.5</div>
            <div className="options">7</div>
          </div>
          <div className="optionsFlex">
            <div className="options">7.5</div>
            <div className="options">8</div>
            <div className="options">8.5</div>
            <div className="options">9</div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontWeight: "900" }}>
          Colors Available
        </p>

        <div className="colors">
          <div className="orange"></div>
          <div className="blue"></div>
          <div className="green"></div>
          <div className="grey"></div>
        </div>
        <p style={{ textAlign: "center" }}>{product.description}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addToCart(product);
            addedToCart();
          }}
          style={{
            backgroundColor: "green",

            margin: "1.6rem",

            cursor: "pointer",

            fontFamily: "Lato, sans-serif",
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>

    <div>
      <img src={product.extras.urlThree} alt="individual sneakers" />
      <img src={product.extras.urlFour} alt="individual sneakers" />
    </div>
  </div>
</div>
</div> */
