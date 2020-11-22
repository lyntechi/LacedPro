import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FaTimes } from "react-icons/fa";

export const CreditCardForm = (props) => {
  const [formState, setFormState] = useState({
    value: "visa",
  });

  const [card, setCard] = useState(false);
  const inputHandler = (e) => {
    setFormState({ value: e.target.value });
    if (e.target.value === "visa") {
      setCard(false);
    } else setCard(!card);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const closePayment = (e) => {
    if (alert("payment will not continue")) {
    } else window.location.reload();
  };

  return (
    <Form
      className={card === false ? "visaForm" : "masterCardForm"}
      onSubmit={handleSubmit}
    >
      <div className="timesIcon">
        <FaTimes onClick={closePayment} style={{ cursor: "pointer" }} />
      </div>
      <div className="selectContainer">
        <p>Please Select your card</p>
        <form>
          <select value={formState.creditCard} onChange={inputHandler}>
            <option name="visacard" value="Visa">
              Visa
            </option>
            <option name="mastercard" value="MasterCard">
              MasterCard
            </option>
          </select>{" "}
        </form>
      </div>
      <Row form>
        <Col md={12}>
          {card === false ? (
            <img src="https://i.imgur.com/h0HMwab.png" alt="visa logo" />
          ) : (
            <img
              src="https://i.imgur.com/XJ5iKHh.png"
              className="mastercard"
              alt="mastercard logo"
            />
          )}
        </Col>
      </Row>

      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="exampleEmail">Card Number</Label>
            <Input type="credit card" name="email" id="exampleEmail" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="exampleEmail">Card Holder</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="exampleEmail">Expires</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="exampleCity">CVC</Label>
            <Input type="text" name="city" id="exampleCity" />
          </FormGroup>
        </Col>
      </Row>
      <Button className="submit">Submit</Button>
    </Form>
  );
};
