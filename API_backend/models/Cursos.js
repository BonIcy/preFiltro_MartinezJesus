const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
    nombreCurso: String,
    descripcion: String,
    profesorACargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profesores'
    },
    horario: String,
    cupoMaximo: Number,
    estudiantesInscritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'estudiantes'
    }]
});

const Curso = mongoose.model('cursos', cursoSchema);

module.exports = Curso;
