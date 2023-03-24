import { useState } from "react";
import React from "react";

const AddSpecies = (props) => {
  // const { initialSpecies = { id: null, common_name: "", scientific_name: "" } } = props;

  // This is the oroginal State with not initial student
  const [species, setNewSpecies] = useState({
    common_name: "",
    scientific_name: "",
    num_in_wild: "",
    stat_code: "",
  });

  //create functions that handle the event of the user typing into the form
  const handleCommonChange = (event) => {
    const newCommonName = event.target.value;
    setNewSpecies((species) => ({ ...species, common_name: newCommonName }));
  };

  const handleScientificChange = (event) => {
    const newScientificName = event.target.value;
    setNewSpecies((species) => ({
      ...species,
      scientific_name: newScientificName,
    }));
  };

  const handleNumWildChange = (event) => {
    const newNumWild = event.target.value;
    setNewSpecies((species) => ({ ...species, num_in_wild: newNumWild }));
  };

  const handleStatCodeChange = (event) => {
    const newStatCode = event.target.value;
    setNewSpecies((species) => ({ ...species, stat_code: newStatCode }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSpecies(species);
    postSpecies(species);
  };

  //A function to handle the post request
  const postSpecies = (newSpecies) => {
    return fetch("http://localhost:8080/api/species/add", {
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
        setNewSpecies((species) => [...newSpecies, data]);
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
          value={species.common_name}
          onChange={handleCommonChange}
        />
        <label>Scientific Name</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={species.scientific_name}
          onChange={handleScientificChange}
        />

        <label>Number in the wild</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={species.num_in_wild}
          onChange={handleNumWildChange}
        />

        <label>Conservation Status Code</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          value={species.stat_code}
          onChange={handleStatCodeChange}
        />
      </fieldset>
      {/* <button type="submit">{!student.id ? "ADD" : "SAVE"}</button> */}
    </form>
  );
};

export default AddSpecies;
