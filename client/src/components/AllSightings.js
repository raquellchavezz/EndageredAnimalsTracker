//i want this to be my homepage
import React, { useState, useEffect } from "react";

const AllSightings = (props) => {
  const [allSightings, setAllSightings] = useState([]); //state for the list of sightings

  const loadData = () => {
    fetch("http://localhost:8080/api/allsightings")
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
};
return (
  <div>
    <h1>Sightings Data</h1>
    <table>
      <thead>
        <tr>
          <th>Nickname</th>
          <th>Time Sighted</th>
          <th>Location</th>
          <th>Is Healthy</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((sighting) => (
          <tr key={sighting.sightings_id}>
            <td>{sighting.nickname}</td>
            <td>{sighting.time_sighted}</td>
            <td>{sighting.location}</td>
            <td>{sighting.is_healthy ? "Yes" : "No"}</td>
            <td>{sighting.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default MyComponent;
