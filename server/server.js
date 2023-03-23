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

// create the get request
app.get("/api/species", cors(), async (req, res) => {
  try {
    const { rows: species } = await db.query("SELECT * FROM species"); //obj named rows we will call species
    res.send(species); //send results of the query to front end
  } catch (e) {
    return res.status(400).json({ e }); //making json object with property e with value of error
  }
});

// // create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

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
