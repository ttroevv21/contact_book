import React from "react";

const List = ({ contacts, deleteContact, getContactToEdit }) => {
  console.log(contacts, "LIST");

  if (contacts.length === 0) {
    return <h2>Ваш список контактов пуст.</h2>;
  }
  return (
    <div className="container">
      <h2>Contacts:</h2>
      <table className="self-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    className="self-btn"
                    onClick={() => {
                      getContactToEdit(item);
                    }}
                    key={item.id}
                  >
                    Edit
                  </button>
                  <button
                    className="self-btn"
                    onClick={() => {
                      deleteContact(item.id);
                    }}
                    key={item.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
