import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddContact = ({ addContact }) => {
  let [contactName, setContactName] = useState("");
  let [contactNumber, setContactNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newContact = {
      name: contactName,
      phone: contactNumber,
      id: Date.now(),
    };
    addContact(newContact);
    setContactName("");
    setContactNumber("");
  }

  return (
    <div className="container">
      <Form className="self-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="self-input"
            onChange={(event) => setContactName(event.target.value)}
            type="text"
            placeholder="Enter name"
            value={contactName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="self-input"
            onChange={(event) => setContactNumber(event.target.value)}
            type="tel"
            placeholder="Enter phone number"
            value={contactNumber}
          />
        </Form.Group>
        <Button className="self-btn" variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
