const express = require("express");
const app = express();
const Etudiant = require("./models/model");
const cors = require("cors");
// Assuming "./configurationBD/configuration-basededonne" sets up database configurations
require("./configurationBD/configuration-basededonne");
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// POST route to add a new student
app.post("/etudiants", async (req, res) => {
    try {
        
        const data = req.body;
        console.log(data)    ;  
         const newEtudiant = new Etudiant(data);
        const savedEtudiant = await newEtudiant.save();
        res.status(201).json(savedEtudiant);
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ error: 'An error occurred while adding the student.' });
    }
});
app.post("/younes", async (req, res) => {
    const { Name, Motpass } = req.body;
  
    try {
      const user = await Etudiant.find({ Name, Motpass });
  
      if (user.length > 0) {
        res.json(user);
      } else {
        res.status(401).json("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Internal server error");
    }
  })

// GET route to fetch all students
app.get("/etudiants", (req, res) => {
    Etudiant.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});
