import { useState } from "react";
import React from "react";

const AddSighting = (props) => {
  // const { initialSpecies = { id: null, common_name: "", scientific_name: "" } } = props;

  // This is the oroginal State with not initial student
  const [sighting, setNewSighting] = useState({
    time_sighted: "",
    individual_id: "",
    location: "",
    is_healthy: "",
    email: "",
  });

  //create functions that handle the event of the user typing into the form
  const handleTimeChange = (event) => {
    const newTimeChange = event.target.value;
    setNewSighting((sighting) => ({ ...sighting, common_name: newCommonName }));
  };

  const handleIdChange = (event) => {
    const newIndividualId = event.target.value;
    setNewSighting((sighting) => ({
      ...sighting,
      individual_id: newIndividualId,
    }));
  };

  const handlelocationChange = (event) => {
    const newLocation = event.target.value;
    setNewSighting((sighting) => ({ ...sighting, location: newLocation }));
  };

  const handleHealthChange = (event) => {
    const newHealth = event.target.value;
    setNewSighting((sighting) => ({ ...sighting, is_healthy: newHealth }));
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setNewSighting((sighting) => ({ ...sighting, email: newEmail }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSighting(sighting);
    postSighting(sighting);
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
        setNewSighting((sighting) => [...newSighting, data]);
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
          value={sighting.time_sighted}
          onChange={handleTimeChange}
        />
        <label> individual_id:</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={sighting.individual_id}
          onChange={handleIdChange}
        />

        <label>location</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={sighting.location}
          onChange={handlelocationChange}
        />

        <label>Health Status</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={sighting.is_healthy}
          onChange={handleHealthChange}
        />

        <label> email:</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={sighting.email}
          onChange={handleEmailChange}
        />
      </fieldset>
      <button type="submit">Add</button>{" "}
    </form>
  );
};

export default AddSighting;
