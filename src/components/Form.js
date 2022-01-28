import React, { useState } from "react";

function Form() {
  //const [firstName, setFirstName] = useState("John");
  //const [lastName, setLastName] = useState("Henry");
  //refactors the above two states into one useState, combining the initial states into a new initial state as an object
  const [formData, setFormData] = useState({firstName:"John", lastName:"Henry",}) 


  // function handleFirstNameChange(event) { 
  //   setFormData({...formData, firstName: event.target.value}) //the spread operator used to copy all key value pairs from current state into the new state then adding the newest name into the new state
  // }
  // function handleLastNameChange(event) {
  //   setFormData({...formData, lastName: event.target.value})
  // }

  //refactors the above two functions into one by including a name attribute in the input tag
  function handleChange(event) {
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    const value = event.target.value;
  
    setFormData({
      ...formData, //the spread operator used to copy all key value pairs from current state into the new state then adding the newest name into the new state
      [name]: value, //dynamically takes in the submitted value and name attributes
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* added name attributes to match the keys in our state, then write generic function to store it for future state */}
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
