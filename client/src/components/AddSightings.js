import { useState } from "react";
import React from "react";

const AddSighting = (props) => {
  // const { initialSpecies = { id: null, common_name: "", scientific_name: "" } } = props;

  // This is the oroginal State with not initial student
  const [newSighting, setNewSighting] = useState({
    time_sighted: "",
    individual_id: "",
    location: "",
    is_healthy: "",
    email: "",
  });

  //create functions that handle the event of the user typing into the form
  const handleTimeChange = (event) => {
    const newTimeChange = event.target.value;
    setNewSighting((newSighting) => ({
      ...newSighting,
      time_sighted: newTimeChange,
    }));
  };

  const handleIdChange = (event) => {
    const newIndividualId = event.target.value;
    setNewSighting((newSighting) => ({
      ...newSighting,
      individual_id: newIndividualId,
    }));
  };

  const handlelocationChange = (event) => {
    const newLocation = event.target.value;
    setNewSighting((newSighting) => ({
      ...newSighting,
      location: newLocation,
    }));
  };

  const handleHealthChange = (event) => {
    const newHealth = event.target.value;
    setNewSighting((newSighting) => ({
      ...newSighting,
      is_healthy: newHealth,
    }));
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setNewSighting((newSighting) => ({ ...newSighting, email: newEmail }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSighting(newSighting);
  };

  //A function to handle the post request
  const postSighting = (newSighting) => {
    return fetch("http://localhost:8080/api/sighting/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post in the front ", data);
        // props.saveSpecies(data);
        setNewSighting((newSighting) => [...newSighting, data]);
      });
  };

  /*   time_sighted: "",
    individual_id: "",
    location: "",
    is_healthy: "",
    email: "", */
  return (
    <form onSubmit={handleSubmit}>
      <label> Add a Sighting</label>
      <fieldset>
        <label>Time sighted</label>
        <input
          type="text"
          id="add-user-name"
          placeholder="First Name"
          required
          value={newSighting.time_sighted}
          onChange={handleTimeChange}
        />

        <label> individual_id:</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={newSighting.individual_id}
          onChange={handleIdChange}
        />

        <label>location</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={newSighting.location}
          onChange={handlelocationChange}
        />

        <label>Health Status</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={newSighting.is_healthy}
          onChange={handleHealthChange}
        />

        <label> email:</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={newSighting.email}
          onChange={handleEmailChange}
        />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
};

export default AddSighting;
