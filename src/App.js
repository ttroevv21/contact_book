import { useState } from "react";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import List from "./components/List";

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  function addContact(newContact) {
    let newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }

  function getContactToEdit(contact) {
    setContactToEdit(contact);
  }

  function saveEditedContact(editedContact) {
    let newContacts = [...contacts];
    let index = newContacts.findIndex((item) => item.id === editedContact);
    newContacts.splice(index, 1, editedContact);
    setContacts(newContacts);
    setContactToEdit(null);
  }

  function deleteContact(contactId) {
    let newContacts = contacts.filter((item) => item.id !== contactId);
    setContacts(newContacts);
  }

  if (contactToEdit) {
    return (
      <EditContact
        saveEditedContact={saveEditedContact}
        contactToEdit={contactToEdit}
      />
    );
  }

  return (
    <div className="App">
      <AddContact addContact={addContact} />
      <List
        deleteContact={deleteContact}
        getContactToEdit={getContactToEdit}
        contacts={contacts}
      />
    </div>
  );
}

export default App;
