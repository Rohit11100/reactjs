import React, { useState, useEffect,Fragment } from "react";
import { nanoid } from "nanoid";
import "./style/curdarr.css";


const getLocalItem=()=>{
    let list = localStorage.getItem('key');
    if(list){
        return JSON.parse(localStorage.getItem('key'))
    }else{
        return []
    }
}


function CurdLocal() {

   
      



    const [contacts, setContacts] = useState(getLocalItem());
    const [addFormData, setAddFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
  
  
     
      
     
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
  
  
  
      ///////////////////////////////////////////////
      document.getElementById("myForm").reset();
     
  
  
  
    };
  
   
    useEffect(() => {
      // storing input name

      
      localStorage.setItem("key", JSON.stringify(contacts));
    }, [contacts]);
   
  
  
  
  
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        fullName: editFormData.fullName,
        address: editFormData.address,
        phoneNumber: editFormData.phoneNumber,
        email: editFormData.email,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };
    
  
    return (
        <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
  
  
            {
                !contacts ?(
                    <h2>No Data Found</h2>
                ):(
                  contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              )))}
             
            </tbody>
          </table>
        </form>
  
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}  id="myForm"  >
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter an addres..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number..."
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />
          <button type="submit" >Add</button>
        </form>
      </div>
    );
};

export default CurdLocal

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="fullName"
            value={editFormData.fullName}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an address..."
            name="address"
            value={editFormData.address}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a phone number..."
            name="phoneNumber"
            value={editFormData.phoneNumber}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="email"
            required="required"
            placeholder="Enter an email..."
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };
  
  
  
  const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(contact.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  };
  