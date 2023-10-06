const mongoose = require('mongoose');

const asignaturaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    profesorACargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profesores'
    },
    horarioClases: String,
    materialEstudio: [String]
});

const Asignatura = mongoose.model('asignaturas', asignaturaSchema);

module.exports = Asignatura;
