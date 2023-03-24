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
  useEffect(
    //function takes 2 params 1) thing load data which will render each time data change 2) empty array bc second param should be param of your state
    () => {
      //runs whenever array changes, like side effect
      loadData(); //21 -23 first param, this func figures out what our questions are
    },
    []
  ); // second param '
};
