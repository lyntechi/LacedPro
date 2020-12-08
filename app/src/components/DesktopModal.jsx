import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: 0,
    "overflow-y": "scroll",
  },
}));

export default function DesktopModal({
  bigImageOne,
  bigImageTwo,
  bigImageThree,
  bigImageFour,
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

  return (
    <div className="firstGroupImages">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={bigImageOne} onClick={firstImage} alt="small sneaker icon " className="desktopImg"/>
        <img src={bigImageTwo} onClick={secondImage} alt="small sneaker icon" className="desktopImg"/>
      </div>
      {/* <div style={{}}> */}
        {product.vid}
        <img src={product.gif} className="video"/>
        {/* </div> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          src={bigImageThree}
          onClick={thirdImage}
          alt="small sneaker icon"
          className="desktopImg"
        />
        <img
          src={bigImageFour}
          onClick={fourthImage}
          alt="small sneaker icon"
          className="desktopImg"
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
        <img
          src={bigImageOne}
          alt="sneaker zoomed in"
          className="modalImages"
        />
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
        <img
          src={bigImageTwo}
          alt="sneaker zoomed in"
          className="modalImages"
        />
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
        <img
          src={bigImageThree}
          alt="sneaker zoomed in"
          className="modalImages"
        />
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
        <img
          src={bigImageFour}
          alt="sneaker zoomed in"
          className="modalImages"
        />
      </Modal>
    </div>
  );
}
