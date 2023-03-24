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
      individual_ide: newIndividualId,
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
    postSpecies(sighting);
  };

  //A function to handle the post request
  const postSpecies = (newSpecies) => {
    return fetch("http://localhost:8080/api/sighting/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpecies),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post in the front ", data);
        // props.saveSpecies(data);
        setNewSighting((sighting) => [...newSpecies, data]);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label> Add a Species</label>
      <fieldset>
        <label>Common Name</label>
        <input
          type="text"
          id="add-user-name"
          placeholder="First Name"
          required
          value={sighting.common_name}
          onChange={handleCommonChange}
        />
        <label>Scientific Name</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={sighting.scientific_name}
          onChange={handleScientificChange}
        />

        <label>Number in the wild</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={sighting.num_in_wild}
          onChange={handleNumWildChange}
        />

        <label>Conservation Status Code</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={sighting.stat_code}
          onChange={handleStatCodeChange}
        />
      </fieldset>
      {/* <button type="submit">{!student.id ? "ADD" : "SAVE"}</button> */}
    </form>
  );
};

export default AddSpecies;
