//i want this to be my homepage
import React, { useState, useEffect } from "react";
import AddSighting from "./AddSightings";

const AllSightings = (props) => {
  const [allSightings, setAllSightings] = useState([]); //state for the list of sightings
  const [sighting, setNewSighting] = useState({
    time_sighted: "",
    individual_id: "",
    location: "",
    is_healthy: "",
    email: "",
  });
  const loadData = () => {
    fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((data) => {
        console.log("This is line 12", data.results);
        setAllSightings(data.results);
      });
  };
  useEffect(
    //function takes 2 params 1) thing load data which will render each time data change 2) empty array bc second param should be param of your state
    () => {
      //runs whenever array changes, like side effect
      loadData(); //21 -23 first param, this func figures out what our questions are
    },
    []
  ); // second param '

  /*


return (
          <QuestionCard
            key={index}
            question={question} 
            score={score}
            setScore={setScore}
          />
        );
*/

  return (
    //can return scoreboard here
    <div>
      <h1>Sightings Data</h1>
      <table>
        <thead>
          <tr>
            <th>Time Sighted</th>
            <th>Individual ID</th>
            <th>Location</th>
            <th>Is Healthy</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allSightings.map((sighting, index) => (
            <tr key={index}>
              <td>{sighting.time_sighted}</td>
              <td>{sighting.individual_id}</td>
              <td>{sighting.location}</td>
              <td>{sighting.is_healthy ? "Yes" : "No"}</td>
              <td>{sighting.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSightings;
