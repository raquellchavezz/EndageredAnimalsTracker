//i want this to be my homepage
import { useState, useEffect } from "react";

const Game = (props) => {
  const [allSightings, setAllSightings] = useState([]); //state for the list of sightings

  const loadData = () => {
    fetch("http://localhost:8080/api/allsightings")
      .then((response) => response.json())
      .then((data) => {
        console.log("This is line 12", data.results);
        setAllSightings(data.results);
      });
  };
};
