/* const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'estudiantes'
    },
    asignatura: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'asignaturas'
    },
    calificacion: Number,
    fechaCalificacion: Date,
    comentarios: String
});

const Nota = mongoose.model('notas', notaSchema);

module.exports = Nota;
 */