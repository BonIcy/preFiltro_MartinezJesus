const database = 'api_academia';
use(database);


db.createCollection(asignaturas);
db.createCollection(cursos);
db.createCollection(estudiantes);
db.createCollection(profesores);


db.asignaturas(
    [{
        "_id": {
          "$oid": "65121a629bce214bff249967"
        },
        "nombre": "Matemáticas",
        "profesorACargo": {
          "$oid": "65122bb7cc36881ad6e1517c"
        },
        "descripcion": "Curso de matemáticas avanzadas",
        "horarioClases": "Martes y Jueves, 10:00 AM - 11:30 AM",
        "materialEstudio": [
          "Libros de texto",
          "Recursos en línea"
        ]
      },
      {
        "_id": {
          "$oid": "65121f249bce214bff24999a"
        },
        "nombre": "Química",
        "descripcion": "Curso introductorio de química.",
        "profesorACargo": {
          "$oid": "65122bb7cc36881ad6e1517d"
        },
        "horarioClases": "Lunes y Miércoles, 10:00 AM - 11:30 AM",
        "materialEstudio": [
          "Libros de química",
          "Recursos en línea"
        ]
      },
      {
        "_id": {
          "$oid": "65121f549bce214bff24999e"
        },
        "nombre": "Física",
        "descripcion": "Curso introductorio de física.",
        "profesorACargo": {
          "$oid": "65122bb7cc36881ad6e1517c"
        },
        "horarioClases": "Martes y Jueves, 2:00 PM - 3:30 PM",
        "materialEstudio": [
          "Libros de física",
          "Recursos en línea"
        ]
      },
      {
        "_id": {
          "$oid": "65121fab9bce214bff2499a4"
        },
        "nombre": "Historia",
        "descripcion": "Curso sobre la historia de la humanidad.",
        "profesorACargo": {
          "$oid": "65122bb7cc36881ad6e1517e"
        },
        "horarioClases": "Martes y Jueves, 9:00 AM - 10:00 AM",
        "materialEstudio": [
          "Libros de historia",
          "Recursos en línea"
        ]
      },
      {
        "_id": {
          "$oid": "6512201f9bce214bff2499aa"
        },
        "nombre": "Biología",
        "descripcion": "Curso introductorio de biología.",
        "profesorACargo": {
          "$oid": "65122bb7cc36881ad6e1517d"
        },
        "horarioClases": "Lunes y Miércoles, 11:00 AM - 12:30 PM",
        "materialEstudio": [
          "Libros de biología",
          "Recursos en línea"
        ]
      },
      {
        "_id": {
          "$oid": "651220499bce214bff2499ae"
        },
        "nombre": "Literatura",
        "descripcion": "Curso de literatura mundial.",
        "profesorACargo": {
          "$oid": "65122bb7cc36881ad6e1517e"
        },
        "horarioClases": "Miércoles y Viernes, 3:00 PM - 4:30 PM",
        "materialEstudio": [
          "Libros de literatura",
          "Obras literarias"
        ]
      },
      {
        "_id": {
          "$oid": "651220759bce214bff2499b2"
        },
        "nombre": "Inglés",
        "descripcion": "Curso de inglés básico.",
        "profesorACargo": {
          "$oid": "65122bb7cc36881ad6e1517f"
        },
        "horarioClases": "Lunes y Miércoles, 6:00 PM - 7:30 PM",
        "materialEstudio": [
          "Libros de inglés",
          "Recursos en línea"
        ]
      }]
)

db.cursos(
    [
    {
        "_id": {
          "$oid": "6512d6e45817ee90562026c4"
        },
        "cupoMaximo": 35,
        "descripcion": "Curso sobre la historia de la humanidad",
        "estudiantesInscritos": [
          "651219ff9bce214bff24995e",
          "65121ab79bce214bff24996e",
          "65121ac79bce214bff249970"
        ],
        "horario": "Lunes y Miércoles, 9:00 AM - 10:30 AM",
        "profesorACargo": "65122bb7cc36881ad6e1517e",
        "nombreCurso": "Historia Universal"
    },
    {
        "_id": {
          "$oid": "6512dc7c1c9489ea60a18a5a"
        },
        "cupoMaximo": 55,
        "descripcion": "Curso uwuw la historia de la humanidad",
        "estudiantesInscritos": [
          "651219ff9bce214bff24995e",
          "65121ab79bce214bff24996e",
          "65121ac79bce214bff249970"
        ],
        "horario": "Lunes y Miércoles, 9:00 AM - 10:30 AM",
        "profesorACargo": "65122bb7cc36881ad6e1517e",
        "nombreCurso": "Historia Universal"
    }
    ]
)

db.estudiantes(
    [{
        "_id": {
          "$oid": "651219ff9bce214bff24995e"
        },
        "apellido": "Pérez",
        "asignaturasInscritas": [
          {
            "$oid": "65121a629bce214bff249967"
          },
          "Historia",
          "Literatura"
        ],
        "correoElectronico": "juan.perez@email.com",
        "direccion": "Calle 123, Ciudad",
        "fechaNacimiento": "2000-05-15",
        "matricula": "2023001",
        "nombre": "Juan",
        "notas": [
          8.5,
          7,
          9.2
        ],
        "numeroTelefono": "+1234567890"
      },
      {
        "_id": {
          "$oid": "65121ab79bce214bff24996e"
        },
        "apellido": "Gómez",
        "asignaturasInscritas": [
          "Historia",
          "Biología",
          "Química"
        ],
        "correoElectronico": "ana.gomez@email.com",
        "direccion": "Avenida 456, Ciudad",
        "fechaNacimiento": "2001-03-10",
        "matricula": "2023002",
        "nombre": "Ana",
        "notas": [
          7.8,
          8.9,
          7.5
        ],
        "numeroTelefono": "+1122334455"
      },
      {
        "_id": {
          "$oid": "65121ac79bce214bff249970"
        },
        "apellido": "Martínez",
        "asignaturasInscritas": [
          "Literatura",
          "Física",
          "Inglés"
        ],
        "correoElectronico": "luis.martinez@email.com",
        "direccion": "Calle 789, Ciudad",
        "fechaNacimiento": "2002-11-20",
        "matricula": "2023003",
        "nombre": "Luis",
        "notas": [
          9,
          8.5,
          9.7
        ],
        "numeroTelefono": "+9988776655"
      },
      {
        "_id": {
          "$oid": "65121ada9bce214bff249972"
        },
        "apellido": "López",
        "asignaturasInscritas": [
          {
            "$oid": "65121a629bce214bff249967"
          },
          "Historia",
          "Biología"
        ],
        "correoElectronico": "maria.lopez@email.com",
        "direccion": "Avenida X, Ciudad",
        "fechaNacimiento": "2003-06-15",
        "matricula": "2023004",
        "nombre": "María",
        "notas": [
          8,
          7.5,
          8.3
        ],
        "numeroTelefono": "+1122334455"
      }]
)

db.profesores(
    [{
        "_id": {
          "$oid": "65122bb7cc36881ad6e1517c"
        },
        "nombre": "María",
        "direccion": "Avenida Principal, Pidecuesta",
        "correoElectronico": "maria.rodriguez@email.com",
        "materiasEnsenanza": [
          {
            "$oid": "65121a629bce214bff249967"
          },
          {
            "$oid": "65121f549bce214bff24999e"
          }
        ],
        "experienciaLaboral": "10 años de enseñanza en universidad",
        "fechaNacimiento": "1980-08-25",
        "apellido": "Rodríguez",
        "numeroTelefono": "+9876543210"
      },
      {
        "_id": {
          "$oid": "65122bb7cc36881ad6e1517d"
        },
        "nombre": "Pedro",
        "direccion": "Calle A, Giron",
        "correoElectronico": "pedro.fernandez@email.com",
        "materiasEnsenanza": [
          {
            "$oid": "6512201f9bce214bff2499aa"
          },
          {
            "$oid": "65121f249bce214bff24999a"
          }
        ],
        "experienciaLaboral": "15 años de enseñanza en secundaria",
        "fechaNacimiento": "1975-05-02",
        "apellido": "Fernández",
        "numeroTelefono": "+1122334455"
      },
      {
        "_id": {
          "$oid": "65122bb7cc36881ad6e1517e"
        },
        "nombre": "Sofía",
        "direccion": "Avenida B, Bogota",
        "correoElectronico": "sofia.torres@email.com",
        "materiasEnsenanza": [
          {
            "$oid": "65121fab9bce214bff2499a4"
          },
          {
            "$oid": "651220499bce214bff2499ae"
          }
        ],
        "experienciaLaboral": "12 años de enseñanza en primaria",
        "fechaNacimiento": "1982-09-12",
        "apellido": "Torres",
        "numeroTelefono": "+9988776655"
      },
      {
        "_id": {
          "$oid": "65122bb7cc36881ad6e1517f"
        },
        "nombre": "Carlos",
        "direccion": "Calle Y, Bucaramanga",
        "correoElectronico": "carlos.hernandez@email.com",
        "materiasEnsenanza": [
          {
            "$oid": "651220759bce214bff2499b2"
          }
        ],
        "experienciaLaboral": "18 años de enseñanza en preparatoria",
        "fechaNacimiento": "1978-11-25",
        "apellido": "Hernández",
        "numeroTelefono": "+1122334455"
      }]
)






/* 
openapi: 3.0.1
info: 
  title: Api sobre academia escolar.
  description: La api se encarga de manejar informacion almacenada en una base de datos (mongoDB) que contiene datos necesarios para gestionar instituciones educativas o academias.
  version: 1.0.0
servers:
- url: https://
tags:
- name: Asignatura
  description: Materias o asignaturas dadas dentro de la institucion. */