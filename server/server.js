const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db-connection.js");

const app = express();

const PORT = 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My template ExpressJS" });
});

// create the get request is working
app.get("/api/species", cors(), async (req, res) => {
  try {
    const { rows: species } = await db.query("SELECT * FROM species"); //obj named rows we will call species
    res.send(species); //send results of the query to front end
  } catch (e) {
    return res.status(400).json({ e }); //making json object with property e with value of error
  }
});

// // create the POST request to add data/new entry say we want to add the scientific name and species
app.post("/api/species/add", async (req, res) => {
  try {
    const newSpecies = {
      common_name: req.body.common_name,
      scientific_name: req.body.scientific_name,
      num_in_wild: req.body.num_in_wild,
      stat_code: req.body.stat_code,
    };
    const result = await db.query(
      "INSERT INTO species(common_name, scientific_name, num_in_wild, stat_code) VALUES($1, $2, $3, $4) RETURNING *",
      [
        newSpecies.common_name,
        newSpecies.scientific_name,
        newSpecies.num_in_wild,
        newSpecies.stat_code,
      ]
    );
    console.log(result.rows[0]);
    let response = result.rows[0];
    res.json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ msg: e.message });
  }
});

// Add a sighting

// //A put request - Update a student
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId
//   const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the student id", studentId);
//   console.log("In the server, from the react - the student to be edited", updatedStudent);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
//   const values = [updatedStudent.lastname, updatedStudent.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// })

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
