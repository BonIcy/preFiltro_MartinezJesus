const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: Date,
    direccion: String,
    correoElectronico: String,
    numeroTelefono: String,
    materiasEnsenanza: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'asignaturas'
    }],
    experienciaLaboral: String
});

const Profesor = mongoose.model('profesores', profesorSchema);

module.exports = Profesor;
