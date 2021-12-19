import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EditContact = ({ contactToEdit, saveEditedContact }) => {
  const [name, setName] = useState(contactToEdit.name);
  const [phone, setPhone] = useState(contactToEdit.phone);

  function handleSubmit(e) {
    e.preventDefault();
    let editedContact = { ...contactToEdit };
    editedContact.name = name;
    editedContact.phone = phone;
    saveEditedContact(editedContact);
  }

  return (
    <div className="container">
      <Form className="self-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="self-input"
            onChange={(event) => setName(event.target.value)}
            type="text"
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="self-input"
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            value={phone}
          />
        </Form.Group>
        <Button className="self-btn" variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditContact;
