import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import MediaModal from "./MediaModal";
import DesktopModal from "./DesktopModal";
import { ItemContext } from "./Context";

function IndividualItem({ addToCart }) {
  const [items] = useContext(ItemContext);

  const params = useParams();
  const product = items.find((item) => `${item.id}` === params.id);
  const addedToCart = () => {
    alert(`${product.name}has been added to cart`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="imagesVideoContainer">
      <div className="videoContent">
        <h2>{product.name}</h2>

        <p>${product.price}</p>

        <div className="smallImagesContainer">
          <MediaModal
            imageOne={product.extras.urlOne}
            imageTwo={product.extras.urlTwo}
            imageThree={product.extras.urlThree}
            imageFour={product.extras.urlFour}
            items={items}
          />
        </div>
        <DesktopModal
          bigImageOne={product.extras.urlOne}
          bigImageTwo={product.extras.urlTwo}
          bigImageThree={product.extras.urlThree}
          bigImageFour={product.extras.urlFour}
          items={items}
        />
        <p>{product.prize}</p>
        <div className="videoContentTitles">
          <p
            style={{
              textAlign: "center",
              color: "black",
              marginTop: "10px",
            }}
          >
            Colors Available
          </p>

          <div className="colors">
            <div className="orange"></div>
            <div className="blue"></div>
            <div className="green"></div>
            <div className="grey"></div>
          </div>
          <p
            style={{
              color: "black",
            }}
          >
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

          <p
            style={{
              color: "black",
              margin: "0 auto",
              fontWeight: "100",
            }}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "14.5px",
              }}
            >
              Description:
            </span>
            <br /> {product.description}
          </p>
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={() => {
              addToCart(product);
              addedToCart();
            }}
          >
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="secondGroupImages"></div>
    </div>
  );
}

export default IndividualItem;
