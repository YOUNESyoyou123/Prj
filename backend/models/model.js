const mongoose = require('mongoose');

const etudiantsSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Idcart: { type: String, required: true },
    Motpass: { type: String, required: true },
    Filliere: { type: String, required: true },
    Anne: { type: String, required: true }
});

const Etudiant = mongoose.model('Etudiant', etudiantsSchema);
module.exports= Etudiant ; 