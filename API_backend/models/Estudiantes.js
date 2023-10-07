const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: Date,
    direccion: String,
    correoElectronico: String,
    numeroTelefono: String,
    matricula: String,
    notaFinal: String,
    asignaturasInscritas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'asignaturas'
    }]
});

const Estudiante = mongoose.model('estudiantes', estudianteSchema);

module.exports = Estudiante;
