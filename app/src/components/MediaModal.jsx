import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    border: "none",
    "overflow-y": "scroll",
  },
}));

export default function MediaModal({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  items,
}) {
  const classes = useStyles();

  const [openOne, setOpenOne] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);
  const [openFour, setOpenFour] = React.useState(false);

  const firstImage = () => {
    setOpenOne(true);
  };
  const secondImage = () => {
    setOpenTwo(true);
  };
  const thirdImage = () => {
    setOpenThree(true);
  };
  const fourthImage = () => {
    setOpenFour(true);
  };
  const handleClose = () => {
    setOpenOne(false);
    setOpenTwo(false);
    setOpenThree(false);
    setOpenFour(false);
  };
  const params = useParams();
  const product = items.find((item) => `${item.id}` === params.id);
  useEffect(() => {
    return product.gif;
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src={product.gif} className="video" alt="" />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={imageOne}
          className="smallImage"
          onClick={firstImage}
          alt="small sneaker icon "
        />
        <img
          src={imageTwo}
          className="smallImage"
          onClick={secondImage}
          alt="small sneaker icon"
        />
        <img
          src={imageThree}
          className="smallImage"
          onClick={thirdImage}
          alt="small sneaker icon"
        />
        <img
          src={imageFour}
          className="smallImage"
          onClick={fourthImage}
          alt="small sneaker icon"
        />
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openOne}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <img src={imageOne} alt="sneaker zoomed in" className="modalImages" />
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openTwo}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <img src={imageTwo} alt="sneaker zoomed in" className="modalImages" />
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openThree}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <img src={imageThree} alt="sneaker zoomed in" className="modalImages" />
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openFour}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <img src={imageFour} alt="sneaker zoomed in" className="modalImages" />
      </Modal>
    </div>
  );
}
